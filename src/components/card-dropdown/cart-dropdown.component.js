import {useSelector} from "react-redux";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from 'react-router-dom'

import {selectCartIsActive, selectCartItems, selectCartTotal} from "../../store/cart-dropdown/cart-dropdown.selector";
import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    const isActive = useSelector(selectCartIsActive);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const toggleClass = isActive ? 'card-dropdown-container active' : 'card-dropdown-container';
    const navigate = useNavigate();

    const toCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className={toggleClass}>
            <div className='card-items'>
                {cartItems.length === 0
                    ? (<div className='empty-card-items'>empty space</div>)
                    : (cartItems.map(item => <CartItem cartItem={item} key={item.id}/>))}
            </div>
            <div className='total-price'>{
                `Total Price: $${cartTotal}
                `
            }</div>
            <div className='cart-button-container'>
                <Button onClick={toCheckoutHandler} type='button' buttonType='inverted' >to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown;