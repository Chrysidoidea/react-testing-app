import './checkout.styles.scss'
import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";
import Button from "../../components/button/button.component";


import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";


const CheckoutComponent = () => {
    const {cartItems, cartTotal} = useContext(DropdownContext);


    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Name</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
                {cartItems.length === 0
                    ? (<div className='empty-checkout-page'>empty space</div>)
                    : (cartItems.map(cartItem => {
                        const {id} = cartItem;
                        return (
                            <CheckoutItemComponent key={id} cartItem={cartItem}/>
                        )
                    }))}
                <div className='total'>
                    <span >Total: ${cartTotal}</span>
                </div>
                <div>
                    <Button>Checkout</Button>
                </div>
            </div>
    )
}

export default CheckoutComponent;