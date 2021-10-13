function LogInForm() {
    return (
        <form>
            <label for='username'>Username: </label>
            <input type='text' id='username' name='username' required maxlength='100' />

            <label for='password'>Password: </label>
            <input type='text' id='password' name='password' required />
        </form>
    );
}

export default LogInForm;