import {signOutUser } from "../../utils/firebase/firebase.utils";
import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";
import {Link} from "react-router-dom";


const SignOutButton = () => {
    const {isActive, setIsActive} = useContext(DropdownContext);


    const goAway = async () => {

        if(isActive) {
            setIsActive(isActive => !isActive);
            await signOutUser()
        } else {
            await signOutUser()
        }
    }



    return (
        <Link className='sign-out' onClick={goAway} to='/react-testing-app/auth'>Sign out</Link>
    )
}

export default SignOutButton;