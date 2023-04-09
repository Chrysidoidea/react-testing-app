import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import Button from "../../button/button.component";
import {setIsActive} from "../../../store/cart-dropdown/cart-dropdown.reducer";
import {selectCartIsActive} from "../../../store/cart-dropdown/cart-dropdown.selector";
import {signOutUser} from "../../../store/user/user.utils";

const SignOutButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const goAway = () => {
        navigate("/auth");
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
        <Button
            type="button"
            onClick={signOutUserHandler}
        >
            Sign out
        </Button>
    )
}

export default SignOutButton;