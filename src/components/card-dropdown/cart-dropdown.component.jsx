import {useSelector} from "react-redux";

import {useNavigate} from "react-router-dom"

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import CartItem from "./cart-item/cart-item.component";
import {
    selectCartIsActive,
    selectCartItems,
    selectCartTotal
} from "../../store/cart-dropdown/cart-dropdown.selector";
import {
    CartDropdownContainer,
    CartDropdownEmpty,
    CartDropdownItems,
    CartDropdownTotalPrice
} from "./cart-dropdown.styles"

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: .1,
        }
    },
    collapse: {
        opacity: 0,
        transition: {ease: "easeInOut", duration: 0.2,},
    }
}
const CartDropdown = () => {
    const isActive = useSelector(selectCartIsActive);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    const navigate = useNavigate();

    const toCheckoutHandler = () => {
        navigate("/checkout");
    }



    return (
        <CartDropdownContainer
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="collapse"
            className={isActive ? "active" : ""}
        >
            <CartDropdownItems>
                {cartItems.length === 0
                    ? (<CartDropdownEmpty>empty space</CartDropdownEmpty>)
                    : (cartItems.map(item => <CartItem cartItem={item} key={item.id}/>))}
            </CartDropdownItems>
            <CartDropdownTotalPrice>
                {
                    `Total Price: $${cartTotal}`
                }
            </CartDropdownTotalPrice>
            <Button onClick={toCheckoutHandler} buttonType={BUTTON_TYPE_CLASSES.inverted}>to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;