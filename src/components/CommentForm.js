import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'; 

function CommentForm(props) {
    const [inputValues, setInputValues] = useState({ content: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState([]);

    useEffect(function submitForm() {
        if (!formSubmitted) {
            return;
        }

        var fetchOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(inputValues),
            mode: 'cors'
        };
        var newCommentUrl = props.apiURL + '/posts/' + props.postId + '/comments';

        fetch(newCommentUrl, fetchOptions)
            .then((res) => {
                if (res.ok || res.status === 400) {
                    return res.json();
                } else {
                    throw new Error('Server responded with: ' + res.status);
                }
            })
            .then((data) => {
                if (data.errors) {
                    ReactDOM.unstable_batchedUpdates(() => {
                        setFormErrors(data.errors);
                        setFormSubmitted(false);    
                    });
                } else {
                    ReactDOM.unstable_batchedUpdates(() => {
                        setInputValues({ content: '' });    //clear new comment form
                        setFormSubmitted(false);    
                    });

                    //re-render PostDetail component with new comment
                    props.setDataNeedsUpdate(true);
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
                <label htmlFor='content'>New Comment: </label>
                <textarea id='content' name='content' required
                    value={inputValues.content} onChange={handleInputChange}
                ></textarea>
                <button type='submit'>Post Comment</button>
            </form>

            {formErrors.length > 0 &&
                <ul>
                    {formErrors.map(err => <li key={err}>{err}</li>)}
                </ul>
            }
        </>
    );
}

export default CommentForm;