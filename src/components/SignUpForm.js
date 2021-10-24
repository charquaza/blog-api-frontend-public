import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function SignUpForm(props) {
    const [inputValues, setInputValues] = useState(
        {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            confirm_password: ''
        }
    );
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
        };

        fetch(props.apiURL + '/sign-up', fetchOptions)
            .then((res) => {
                if (res.ok || res.status === 400) {
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
                <label htmlFor='first_name'>First Name: </label>
                <input type='text' id='first_name' name='first_name' required maxLength='100' 
                    value={inputValues.first_name} onChange={handleInputChange}
                />

                <label htmlFor='last_name'>Last Name: </label>
                <input type='text' id='last_name' name='last_name' required maxLength='100' 
                    value={inputValues.last_name} onChange={handleInputChange}
                />

                <label htmlFor='username'>Username: </label>
                <input type='text' id='username' name='username' required maxLength='100' 
                    value={inputValues.username} onChange={handleInputChange}
                />

                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' name='password' required 
                    value={inputValues.password} onChange={handleInputChange}
                />

                <label htmlFor='confirm_password'>Confirm Password: </label>
                <input type='password' id='confirm_password' name='confirm_password' required 
                    value={inputValues.confirm_password} onChange={handleInputChange}
                />

                <button type='submit'>Sign Up</button>
            </form>

            {formErrors.length > 0 &&
                <ul>
                    {formErrors.map(err => <li key={err}>{err}</li>)}
                </ul>
            }
        </>
    );
}

export default SignUpForm;