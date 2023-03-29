import {ReactComponent as MerchIcon} from "../../assets/shopping-bag.svg";
import {useDispatch, useSelector} from "react-redux";

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
        <div
            className='card-icon-container'
            onClick={changeHandler}
        >
            <MerchIcon className='merch-icon'/>
            <span className='icon-count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon;