import {setIsActive} from "../../store/cart-dropdown/cart-dropdown.reducer";
import {selectCartIsActive} from "../../store/cart-dropdown/cart-dropdown.selector";
import {useDispatch} from "react-redux";
// import {signOutStart} from "../../store/user/user.action";

import Button from "../button/button.component";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {signOutUser} from "../../store/user/user.utils";

const SignOutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const goAway = () => {
        navigate('/auth');
    }
    const isActive = useSelector(selectCartIsActive);
    const signOutUserHandler = () => {
        dispatch(signOutUser());
        if (isActive) {
            dispatch(setIsActive(isActive => !isActive));
        }
        goAway();
    }

    return (
        <div className='sign-out-button_container'>
        <Button
            type='button'
            buttonType='undefined'
            onClick={signOutUserHandler}
        >
            Sign out
        <
        /Button>
        </div>
    )
}

export default SignOutButton;