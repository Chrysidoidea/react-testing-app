import {useSelector} from "react-redux";

import {
    CheckoutSector,
    CheckoutHeader,
    CheckoutBody, TotalPrice, PriceAmount,
} from './checkout.styles'
import Button from "../../components/button/button.component";
import {selectCartItems, selectCartTotal} from "../../store/cart-dropdown/cart-dropdown.selector";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import PaymentFormComponent from "../../components/payment-form/payment-form.component";

const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)


    return (
        <CheckoutSector>
            <CheckoutHeader>
                    <span>Product</span>
                    <span>Name</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Remove</span>
            </CheckoutHeader>
            <CheckoutBody>
                {cartItems.length === 0
                    ? (<div className='empty-checkout-page'>empty space</div>)
                    : (cartItems.map(cartItem => {
                        const {id} = cartItem;
                        return (
                            <CheckoutItemComponent key={id} cartItem={cartItem}/>
                        )
                    }))}
                    <TotalPrice>Total: $<PriceAmount>{cartTotal}</PriceAmount></TotalPrice>
                    <Button>Checkout</Button>
                    <PaymentFormComponent/>
            </CheckoutBody>
            </CheckoutSector>
    )
}

export default CheckoutComponent;