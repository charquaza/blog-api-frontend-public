function Comment(props) {
    var commentData = props.commentData;

    return (
        <ul>
            <li>{commentData.author} {commentData.timestamp}</li>
            <li>{commentData.content}</li>
        </ul>
    );
}

export default Comment;