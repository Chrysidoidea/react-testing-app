import { ReactComponent as MerchIcon } from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";


import './card-icon.styles.scss';

const CartIcon = () => {

        const {setIsActive, cartItems} = useContext(DropdownContext);

        const changeHandler = () => {
            setIsActive(isActive => !isActive)
        }


    return (
        <div
            className='card-icon-container'
            onClick={changeHandler}
        >
            <MerchIcon className='merch-icon'/>
            <span className='icon-count'>{cartItems.length}</span>
        </div>
    )
};

export default CartIcon;