import Button from "../button/button.component";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    sighInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'
import {useState} from "react";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);

    }

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await sighInAuthUserWithEmailAndPassword(email, password);
            resetFormField();
            console.log(response)

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
            [name]:value
        })
    };



    return (
        <div className='sign-in-container'>
            <h2>Enter account credentials</h2>
            <h1>WELCOME</h1>
            <span>Sign in via Mail & Password</span>
          <form onSubmit={submitHandler}>
            <FormInput
                label='Email'
                type='email'
                required
                onChange={changeHandler}
                name='email'
                value={email}
            />
            <FormInput
                label='Password'
                type='password'
                required
                onChange={changeHandler}
                name='password'
                value={password}
            />

<div className='sign-in-button-container'>
            <Button
                type='submit'>
                Sign in
            </Button>
            <Button
                 type='button'
                 buttonType='google'
                 onClick={signInWithGoogle}>
                 Sign in with Google
            </Button>
</div>
          </form>
        </div>
    )
}

export default SignInForm;