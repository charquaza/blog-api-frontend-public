import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

function Comment(props) {
    var currUser = props.currUser;
    var commentData = props.commentData;
    var author = commentData.author;

    var isAdminOrAuthor = currUser && 
        (currUser.is_admin || currUser._id === author._id);

    const [editMode, setEditMode] = useState(false);
    const [willUpdate, setWillUpdate] = useState(false);  
    const [willDelete, setWillDelete] = useState(false);
    const [serverErrors, setServerErrors] = useState(null);
    const [inputValues, setInputValues] = useState({ content: commentData.content });

    useEffect(function updateComment() {
        if (!willUpdate) {
            return;
        }

        var commentUrl = props.apiURL + '/posts/' + commentData.post + '/comments/' + commentData._id;
        var fetchOptions = {
            method: 'PUT',
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValues),
            mode: 'cors'
        };

        fetch(commentUrl, fetchOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (!data) {
                    throw new Error('Server error');
                } else if (data.errors) {
                    ReactDOM.unstable_batchedUpdates(() => {
                        setServerErrors(data.errors);
                        setWillUpdate(false);
                    });
                } else {
                    ReactDOM.unstable_batchedUpdates(() => {
                        setWillUpdate(false);
                        setEditMode(false);
                    });
                    props.setDataNeedsUpdate(true);
                }
            })
            .catch((err) => {
                console.log(err);
                ReactDOM.unstable_batchedUpdates(() => {
                    setServerErrors([err.message]);
                    setWillUpdate(false);
                });
            });
    });

    useEffect(function deleteComment() {
        if (!willDelete) {
            return;
        }

        var commentUrl = props.apiURL + '/posts/' + commentData.post + '/comments/' + commentData._id;
        var fetchOptions = {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
            mode: 'cors'
        };

        fetch(commentUrl, fetchOptions)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (!data) {
                    throw new Error('Server error');
                } else if (data.errors) {
                    ReactDOM.unstable_batchedUpdates(() => {
                        setServerErrors(data.errors);
                        setWillDelete(false);
                    });
                } else {
                    setWillDelete(false);
                    props.setDataNeedsUpdate(true);
                }
            })
            .catch((err) => {
                console.log(err);
                ReactDOM.unstable_batchedUpdates(() => {
                    setServerErrors([err.message]);
                    setWillDelete(false);
                });
            });
    });

    function enterEditMode(e) {
        setEditMode(true);
        setServerErrors(null);
    }
    function exitEditMode() {
        setEditMode(false);
        setServerErrors(null);
        setInputValues({ content: commentData.content });
    }

    function handleSubmitUpdate(e) {
        e.preventDefault();

        setWillUpdate(true);
        setWillDelete(false);
        setServerErrors(null);
    }
    function handleClickDelete() {
        setWillDelete(true);
        setWillUpdate(false);
        setServerErrors(null);
    }

    function handleInputChange(e) {
        var inputElem = e.target;
        setInputValues((prevState) => {
            return { ...prevState, [inputElem.name]: inputElem.value };
        });
    }

    return (
        <div>
            <ul>
                <li>{author.username} ({author.first_name} {author.last_name}) {commentData.timestamp}</li>
                <li>
                    {editMode
                        ? (
                            <form onSubmit={handleSubmitUpdate}>
                                <textarea id='content' name='content' required
                                    value={inputValues.content} onChange={handleInputChange}
                                ></textarea>
                                <button>Save</button>
                            </form>
                        )
                        : commentData.content
                    }
                </li>
            </ul>

            {serverErrors && 
                <ul>
                    {serverErrors.map(err => <li key={err}>{err}</li>)}
                </ul>
            }

            {/* render edit and delete buttons if current user is admin or author of comment 
                and comment delete or update request has not been sent to server */}
            {(isAdminOrAuthor && (!willDelete && !willUpdate)) &&
                (editMode 
                    ? (
                        <>
                            <button onClick={exitEditMode}>Cancel</button>
                        </>
                    )
                    : (
                        <>
                            <button onClick={enterEditMode}>Edit</button>
                            <button onClick={handleClickDelete}>Delete</button>
                        </>
                    )
                )
            }
        </div>
    );
}

export default Comment;