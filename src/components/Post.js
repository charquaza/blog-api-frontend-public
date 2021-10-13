function Post(props) {
    var postData = props.postData;
    var author = postData.author;

    return (
        <ul>
            <li>{postData.title}</li>
            <li>
                {author.username} ({author.first_name} {author.last_name}) 
                {postData.timestamp}
            </li>
            <li>{postData.content}</li>
        </ul>
    );
}

export default Post;