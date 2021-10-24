import { Link } from 'react-router-dom';

function Post(props) {
    var postData = props.postData;
    var author = postData.author;

    return (
        <ul>
            <li><h3><Link to={'/posts/' + postData._id}>{postData.title}</Link></h3></li>
            <li>
                {author.username} ({author.first_name} {author.last_name}) {postData.timestamp}
            </li>
            <li>{postData.content}</li>
        </ul>
    );
}

export default Post;