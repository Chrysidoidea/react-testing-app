import {useState} from "react";
import {useDispatch} from "react-redux";
import Button from "../button/button.component";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import AnimationAuthOne from "../../effects/authentication-animation/animation.auth(1)";
import AnimationAuthTwo from "../../effects/authentication-animation/animation.auth(2)";
import AnimationAuthThree from "../../effects/authentication-animation/animation.auth(3)";
import AnimationAuthFour from "../../effects/authentication-animation/animation.auth(4)";
import AnimationAuthFifth from "../../effects/authentication-animation/animation.auth(5)";
import AnimationAuthButton from "../../effects/authentication-animation/Animation.auth.button";

import './sign-in.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }
    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormField();

        } catch (err) {

            switch (err.code) {
                case "auth/wrong-password":
                    alert('wrong password entered');
                    break;
                case "auth/user-not-found":
                    alert('entered user doesn\'t exist');
                    break;
                default:
                    console.log(err)
            }
        }
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    };

    return (
            <div className='sign-in-container'>
                <AnimationAuthOne>
                <h2>Enter account credentials</h2>
                </AnimationAuthOne>
                <AnimationAuthTwo>
                <h1>WELCOME</h1>
                </AnimationAuthTwo>
                <AnimationAuthThree>
                <span>Sign in via Mail & Password</span>
                </AnimationAuthThree>
                <form onSubmit={submitHandler}>
                    <AnimationAuthFour>
                    <FormInput
                        label='Email'
                        type='email'
                        required
                        onChange={changeHandler}
                        name='email'
                        value={email}
                    />
                    </AnimationAuthFour>
                    <AnimationAuthFifth>
                    <FormInput
                        label='Password'
                        type='password'
                        required
                        onChange={changeHandler}
                        name='password'
                        value={password}
                    />
                    </AnimationAuthFifth>
                    <AnimationAuthButton>
                    <div className='sign-in-button-container'>
                        <Button
                            type='submit'
                            buttonType='undefined'
                        >
                            Sign in
                        </Button>
                        <Button
                            type='button'
                            buttonType='google'
                            onClick={signInWithGoogle}>
                            Sign in with Google
                        </Button>
                    </div>
                    </AnimationAuthButton>
                </form>
            </div>
    )
}

export default SignInForm;