import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const [logOut, setLogOut] = useState(false);

    useEffect(() => {
        if (!logOut) {
            return;
        }
        
        //clear user info from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        //re-render app
        setLogOut(false);
        props.setCurrUser(null);
    });

    var navLinks = (props.currUser) 
        ? [
            <li key='home'><Link to='/'>Home</Link></li>,
        ]
        : [
            <li key='home'><Link to='/'>Home</Link></li>,
            <li key='signup'><Link to='/sign-up'>Sign Up</Link></li>, 
            <li key='login'><Link to='/log-in'>Log In</Link></li>
        ];
    
    var greeting = (props.currUser)
        ? <>
            <p>
                Welcome, {props.currUser.first_name}
                &nbsp;{props.currUser.last_name}
                &nbsp;({props.currUser.username})
            </p>
            <button onClick={handleLogOut}>Log Out</button>
        </>
        : null;
    
    function handleLogOut() {
        setLogOut(true);
    }

    return (
        <header>
            <h1>The Blog</h1>
            {greeting}
            <nav>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        </header>
    );
}

export default Header;