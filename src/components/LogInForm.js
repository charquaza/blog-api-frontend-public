import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function LogInForm(props) {
    const [inputValues, setInputValues] = useState({ username: '', password: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState([]);

    useEffect(function submitForm() {
        if (!formSubmitted) {
            return;
        }

        var fetchOptions = {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputValues), 
            mode: 'cors'
        }

        fetch(props.apiURL + '/log-in', fetchOptions)
            .then((res) => {
                if (res.ok || res.status === 401) {
                    return res.json();
                } else {
                    throw new Error('Server responded with: ' + res.status);
                }
            })
            .then((data) => {
                if (data.errors) {
                    //force batched state update to avoid calling api twice
                    ReactDOM.unstable_batchedUpdates(() => {
                        setFormErrors(data.errors);
                        setFormSubmitted(false);
                    });
                } else {
                    //store user info in localStorage
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('token', data.token);

                    //re-render app
                    props.setCurrUser(data.user);
                }
            })
            .catch((err) => {
                console.log(err);
                ReactDOM.unstable_batchedUpdates(() => {
                    setFormErrors([err.message]);
                    setFormSubmitted(false);
                });
            });
    });

    function handleInputChange(e) {
        var inputElem = e.target;
        setInputValues((prevState) => {
            return { ...prevState, [inputElem.name]: inputElem.value };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setFormErrors([]);  //clear error messages
        setFormSubmitted(true);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name='username'  
                    value={inputValues.username} required maxLength='100'
                    onChange={handleInputChange} 
                />

                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' 
                    value={inputValues.password} required 
                    onChange={handleInputChange}
                />

                <button type='submit'>Log In</button>
            </form>

            {formErrors.length > 0 &&
                <ul>
                    {formErrors.map(err => <li key={err}>{err}</li>)}
                </ul>
            }
        </>
    );
}

export default LogInForm;