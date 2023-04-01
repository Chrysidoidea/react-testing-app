import {useDispatch, useSelector} from "react-redux";
import {Icon, IconCount, CartIconWrapper} from "../../Routes/navigation/navigation.styles";

import {selectCartIsActive, selectCartCount} from "../../store/cart-dropdown/cart-dropdown.selector";
import {setIsActive} from "../../store/cart-dropdown/cart-dropdown.reducer";
import './card-icon.styles.scss';

const CartIcon = () => {
    const isActive = useSelector(selectCartIsActive);
    const cartCount = useSelector(selectCartCount);

    const dispatch = useDispatch();

    const changeHandler = () => {
        dispatch(setIsActive(!isActive))
    };


    return (
        <CartIconWrapper
            className='card-icon-container'
            onClick={changeHandler}
        >
            <Icon/>
            <IconCount
            >
                {cartCount}
            </IconCount>
        </CartIconWrapper>
    )
};

export default CartIcon;