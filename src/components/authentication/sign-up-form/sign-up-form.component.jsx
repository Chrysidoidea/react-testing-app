import {useState} from "react";
import {useDispatch} from "react-redux";
import AnimationAuthOne from "../../../effects/authentication-animation/animation.auth(1)";
import AnimationAuthTwo from "../../../effects/authentication-animation/animation.auth(2)";
import AnimationAuthThree from "../../../effects/authentication-animation/animation.auth(3)";
import AnimationAuthFour from "../../../effects/authentication-animation/animation.auth(4)";
import AnimationAuthFifth from "../../../effects/authentication-animation/animation.auth(5)";
import AnimationAuthButton from "../../../effects/authentication-animation/Animation.auth.button";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";

import {SignUpContainer} from "./sign-up-form.styles";
import {AuthenticationButtonContainer} from "../authentication.styles"
import {createUser} from "../../../store/user/user.utils";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        })
    };

    const resetFormField = () => {
        setFormFields(defaultFormFields)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords does not match");
            return;
        }

        try {
            dispatch(createUser({email, password, displayName}))
            resetFormField();

        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                console.log("email already in use")
            } else {
                console.log(err)
            }
        }
    }

    return (
        <SignUpContainer>
            <AnimationAuthOne>
                <h2>Sign up via Mail & Password</h2>
            </AnimationAuthOne>
            <form onSubmit={submitHandler}>
                <AnimationAuthTwo>
                    <FormInput
                        label="Name"
                        type="text"
                        required
                        onChange={changeHandler}
                        name="displayName"
                        value={displayName}
                    />
                </AnimationAuthTwo>
                <AnimationAuthThree>
                    <FormInput
                        label="Email"
                        type="email"
                        required
                        onChange={changeHandler}
                        name="email"
                        value={email}
                    />
                </AnimationAuthThree>
                <AnimationAuthFour>
                    <FormInput
                        label="Password"
                        type="password"
                        required
                        onChange={changeHandler}
                        name="password"
                        value={password}
                    />
                </AnimationAuthFour>
                <AnimationAuthFifth>
                    <FormInput
                        label="Confirm Password"
                        type="password"
                        required
                        onChange={changeHandler}
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                </AnimationAuthFifth>
                <AnimationAuthButton>
                    <AuthenticationButtonContainer>
                        <Button type="submit">
                            Submit
                        </Button>
                    </AuthenticationButtonContainer>
                </AnimationAuthButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;