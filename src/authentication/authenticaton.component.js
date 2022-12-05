// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import SignUpForm from "../components/sign-up-form/sign-up-form.component";
import SignInForm from "../components/sign-in-form/sign-in.component";
import UserMenuComponent from "../components/user-menu/user-menu.component";
import {useContext} from "react";

import {UserContext} from "../contexts/user.context";

import './authentication.styles.scss';

const Authentication = () => {
    const {currentUser} = useContext(UserContext);

    return (

        <div>
            {currentUser
                ? (<UserMenuComponent/>)
                : (<div className='authentication-container'>
                    <SignInForm/>
                    <SignUpForm/>
                </div>

            )
            }
        </div>

    )
}

export default Authentication;