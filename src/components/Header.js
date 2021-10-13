function Header(props) {
    //use links with react router or just buttons
    var authLinks = (props.loggedIn) 
        ? <li><a href='/'>Log Out</a></li>
        : [
            <li><a href='/'>Sign Up</a></li>, 
            <li><a href='/'>Log In</a></li>
        ];

    return (
        <header>
            <h1>The Blog</h1>
            <ul>
                {authLinks}
            </ul>
        </header>
    );
}

export default Header;