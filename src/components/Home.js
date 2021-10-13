import Post from "../components/Post";

function Home(props) {
    var PostComponentList = props.postList.map((post) => {
        return (
            <li key={post._id}>
                <Post postData={post} />
            </li>
        );
    });
    
    return (
        <main>
            <h2>Welcome to <em>The Blog</em></h2>
            <ul>{PostComponentList}</ul>
        </main>
    );
}

export default Home;