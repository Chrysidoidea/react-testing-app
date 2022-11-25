import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";


import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};



const SignUpForm = () => {
        const [formFields, setFormFields] = useState(defaultFormFields);
        const {displayName, email, password, confirmPassword} = formFields;

        const changeHandler = (event) => {
            const {name, value} = event.target;
            setFormFields({
                ...formFields,
                [name]:value
            })
        };

        const resetFormField = () => {
            setFormFields(defaultFormFields)
        }

        const submitHandler = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('passwords doesn\'t match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            await createUserDocumentFromAuth(user, {displayName});

            resetFormField();

        } catch (err) {
            if(err.code === 'auth/email-already-in-use') {
                console.log('email already in use')
            } else {
                console.log(err)
            }
        }

    }

    return (
        <div className='sign-up-container'>
            <h2>Have no account?</h2>
            <h1>DON'T PANIC</h1>
            <span>Sign up via Mail & Password</span>
            <form onSubmit={submitHandler}>

                <FormInput
                    label='Name'
                    type='text'
                    required
                    onChange={changeHandler}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={changeHandler}
                    name='confirmPassword'
                    value={confirmPassword}
                />


                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SignUpForm;