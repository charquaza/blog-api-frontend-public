import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

function PostDetail(props) {
    const [postData, setPostData] = useState(null);
    const [commentList, setCommentList] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [dataNeedsUpdate, setDataNeedsUpdate] = useState(false);
    const urlParams = useParams();
    
    useEffect(function getPost() {
        //do not fetch data if:
        //1. there was a previous fetch error, or
        //2. initial fetch was successful and 
        //   dataNeedsUpdate === false, meaning rendered data is up-to-date
        if (fetchError || (postData && !dataNeedsUpdate)) {
            return;
        }

        var postURL = props.apiURL + '/posts/' + urlParams.id;

        fetch(postURL, { method: 'GET', mode: 'cors' })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server responded with: ' + res.status);
                }
            })
            .then((data) => {
                ReactDOM.unstable_batchedUpdates(() => {
                    setPostData(data.data);
                    setDataNeedsUpdate(false);
                });
            })
            .catch((err) => {
                console.log(err);
                setFetchError(err.message);
            });
    });

    useEffect(function getComments() {
        //do not fetch data if:
        //1. there was a previous fetch error, or
        //2. initial fetch was successful and 
        //   dataNeedsUpdate === false, meaning rendered data is up-to-date
        if (fetchError || (postData && !dataNeedsUpdate)) {
            return;
        }

        var commentsURL = props.apiURL + '/posts/' + urlParams.id + '/comments';

        //send token too
        fetch(commentsURL, { method: 'GET', mode: 'cors' })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Server responded with: ' + res.status);
                }
            })
            .then((data) => {
                setCommentList(data.data);
            })
            .catch((err) => {
                console.log(err);
                setFetchError(err.message);
            });
    });

    var commentComponents = commentList.map((comment) => {
        return (
            <li key={comment._id}>
                <Comment commentData={comment} currUser={props.currUser} 
                    apiURL={props.apiURL} setDataNeedsUpdate={setDataNeedsUpdate}
                />
            </li>
        );
    });
    
    return (
        <main>
            {fetchError
                ? <p>{fetchError}</p>
                : postData 
                ? 
                    <>
                        <h2>{postData.title}</h2>

                        {/* post info */}
                        <ul>
                            <li>
                                {postData.author.username} ({postData.author.first_name} 
                                &nbsp;{postData.author.last_name}) {postData.timestamp}
                            </li>
                            <li>{postData.content}</li>
                        </ul>

                        {/* comment list */}
                        <ul>
                            {commentComponents}    
                        </ul>

                        {/* render new comment form if logged in */}
                        {props.currUser && 
                            <CommentForm apiURL={props.apiURL} postId={urlParams.id} 
                                setDataNeedsUpdate={setDataNeedsUpdate}
                            />
                        }

                        {/* edit comment form */}
                    </>
                : <p>Loading post...</p>
            }
        </main>
    );
}

export default PostDetail;