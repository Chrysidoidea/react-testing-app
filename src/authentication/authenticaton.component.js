import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";
import SignInForm from "../components/sign-in-form/sign-in.component";
import './authentication.styles.scss';

const SignIn = () => {

    return (
        <div className='authentication-container'>

            <SignInForm/>
            <SignUpForm/>


        </div>
    )
}

export default SignIn;