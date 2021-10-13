function SignUpForm() {
    return (
        <form>
            <label for='first_name'>First Name: </label>
            <input type='text' id='first_name' name='first_name' required maxlength='100' />

            <label for='last_name'>Last Name: </label>
            <input type='text' id='last_name' name='last_name' required maxlength='100' />

            <label for='username'>Username: </label>
            <input type='text' id='username' name='username' required maxlength='100' />

            <label for='password'>Password: </label>
            <input type='text' id='password' name='password' required />

            <label for='confirm_password'>Confirm Password: </label>
            <input type='text' id='confirm_password' name='confirm_password' required />
        </form>
    );
}

export default SignUpForm;