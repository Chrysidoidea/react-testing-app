import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import UserMenuComponent from "../user-menu/user-menu.component";
import AnimationComponent from "../../effects/Animation.component";

import {setSignInUpState} from "../../store/sign.in.up.switcher/sign.in.up.switcher.reducer";
import {
    AuthenticationContainer,
    AuthenticationSector, SignInHandler
} from "./authentication.styles"

const Authentication = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signInUpState = useSelector((state) => state.signInUpSwitcher.signInUpState)
    const currentUser = useSelector((state) => state.user.currentUser);


    const signIn = () => {
        navigate("sign-up");
        setTimeout(() => {
            dispatch(setSignInUpState(false))
        }, 200)

    }
    const signUp = () => {
        navigate("sign-in");
        setTimeout(() => {
            dispatch(setSignInUpState(true))
        }, 200)

    }

    return (
        <AnimationComponent>
            {
                currentUser ? (<UserMenuComponent/>)
                : (<AuthenticationSector>
                        <AuthenticationContainer>
                            <Outlet/>
                            <SignInHandler>
                                {
                                    signInUpState
                                        ? (<h1 onClick={signIn}>Have no account?</h1>)
                                        : (<h1 onClick={signUp}>Have an account?</h1>)
                                }
                            </SignInHandler>
                        </AuthenticationContainer>
                    </AuthenticationSector>)
            }
        </AnimationComponent>

    )
}

export default Authentication;