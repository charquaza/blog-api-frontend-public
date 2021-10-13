import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';

function PostDetail(props) {
    var postData = props.postData;
    var author = postData.author;

    var commentList = props.commentList.map((comment) => {
        return (
            <li key={comment._id}>
                <Comment commentData={comment} />
            </li>
        );
    });
    
    return (
        <main>
            <h2>{postData.title}</h2>

            {/* post info */}
            <ul>
                <li>
                    {author.username} ({author.first_name} {author.last_name}) 
                    {postData.timestamp}
                </li>
                <li>{postData.content}</li>
            </ul>

            {/* comment list */}
            <ul>
                {commentList}    
            </ul>

            {/* new comment form */}
            <CommentForm />

            {/* edit comment form */}
        </main>
    );
}

export default PostDetail;