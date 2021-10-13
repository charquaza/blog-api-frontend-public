function CommentForm() {
    return (
        <form>
            <label for='content'>Content: </label>
            <textarea id='content' name='content' required></textarea>
        </form>
    );
}

export default CommentForm;