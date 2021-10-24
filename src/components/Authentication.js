import { Redirect, useLocation } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';
import LogInForm from '../components/LogInForm';

function Authentication(props) {
    const location = useLocation();

    if (props.currUser) {
        return <Redirect to='/' />;
    }

    var heading;
    var form;

    if (location.pathname === '/sign-up') {
        heading = 'Sign Up';
        form = <SignUpForm apiURL={props.apiURL} setCurrUser={props.setCurrUser} />;
    }

    if (location.pathname === '/log-in') {
        heading = 'Log In';
        form = <LogInForm apiURL={props.apiURL} setCurrUser={props.setCurrUser} />;  
    }

    return (
        <main>
            <h2>{heading}</h2>
            {form}
        </main>
    );
}

export default Authentication;