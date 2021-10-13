import SignUpForm from '../components/SignUpForm';
import LogInForm from '../components/LogInForm';

function Authentication(props) {
    var form;

    if (props.signUp) {
        form = <SignUpForm />;
    }

    if (props.logIn) {
        form = <LogInForm />;  
    }

    return (
        <main>{form}</main>
    );
}

export default Authentication;