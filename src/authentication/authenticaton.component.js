
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import UserMenuComponent from "../components/user-menu/user-menu.component";
import {useDispatch} from "react-redux";


import './authentication.styles.scss';
import AnimationComponent from "../effects/Animation.component";
import {useSelector} from "react-redux";
import {setSignInUpState} from "../store/sign.in.up.switcher/sign.in.up.switcher.action";


const Authentication = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signInUpState = useSelector((state) => state.signInUpSwitcher.signInUpState)
    const currentUser = useSelector((state) => state.user.currentUser);




    const signIn = () => {
        navigate('sign-up');
        setTimeout(() => {
            dispatch(setSignInUpState(false))
        }, 200)

    }
    const signUp = () => {
        navigate('sign-in');
        setTimeout(() => {
            dispatch(setSignInUpState(true))
        }, 200)

    }

    return (
        <AnimationComponent>
            {currentUser ? (<UserMenuComponent/>)
                : (<div className='authentication-sector'>

                        <div className='authentication-container'>
                            <Outlet/>

                            <div className='sign-in-handler'>
                                {signInUpState
                                    ? (<h1 onClick={signIn}>Have no account?</h1>)
                                    : (<h1 onClick={signUp}>Have an account?</h1>)
                                }
                            </div>

                        </div>

                    </div>
                )}

        </AnimationComponent>

    )
}

export default Authentication;