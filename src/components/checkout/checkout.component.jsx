import {useSelector} from "react-redux";


import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {selectCartItems, selectCartTotal} from "../../store/cart-dropdown/cart-dropdown.selector";
import CheckoutItemComponent from "./checkout-item/checkout-item.component";
import PaymentFormComponent from "../payment-form/payment-form.component";
import {
    CheckoutSector,
    CheckoutHeader,
    CheckoutBody,
    TotalPrice,
    PriceAmount,
    EmptySpaceElement,
} from './checkout.styles';

const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)


    return (
        <CheckoutSector>
            <CheckoutHeader>
                <span>Picture</span>
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </CheckoutHeader>
            <CheckoutBody>
                {cartItems.length === 0
                    ? (<EmptySpaceElement>empty space</EmptySpaceElement>)
                    : (cartItems.map(cartItem => {
                        const {id} = cartItem;
                        return (
                            <CheckoutItemComponent key={id} cartItem={cartItem}/>
                        )
                    }))}
                <TotalPrice>Total: $<PriceAmount>{cartTotal}</PriceAmount></TotalPrice>
                <Button buttonType={BUTTON_TYPE_CLASSES.default}>Checkout</Button>
                <PaymentFormComponent/>
            </CheckoutBody>
        </CheckoutSector>
    )
}

export default CheckoutComponent;