import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {

    const {isActive, cartItems} = useContext(DropdownContext);
    let toggleClass = isActive ? 'card-dropdown-container active' : 'card-dropdown-container';

    return (
        <div className={toggleClass}>
            <div className='card-items'>
                {cartItems.length === 0
                    ? (<div className='empty-card-items'>empty space</div>)
                    : (cartItems.map(item => <CartItem cartItem={item} key={item.id}/>))}
            </div>
            <div className='total-price'>{
                `Total Price: $${
                    cartItems.reduce((accumulator, currentElement) => accumulator + Number.parseInt(currentElement.price) , 0)
                }
                `

            }</div>
            <div className='cart-button-container'>
                <Button buttonType='inverted'>Checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown;