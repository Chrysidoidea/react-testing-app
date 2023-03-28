import './checkout.styles.scss'

import Button from "../../components/button/button.component";
import {selectCartItems, selectCartTotal} from "../../store/cart-dropdown/cart-dropdown.selector";

import CheckoutItemComponent from "../../components/checkout-item/checkout-item.component";
import {useSelector} from "react-redux";


const CheckoutComponent = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)


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
            <div className='checkout-body'>
                {cartItems.length === 0
                    ? (<div className='empty-checkout-page'>empty space</div>)
                    : (cartItems.map(cartItem => {
                        const {id} = cartItem;
                        return (
                            <CheckoutItemComponent key={id} cartItem={cartItem}/>
                        )
                    }))}

                <div className='total'>
                    <span >Total: $<span className='total_price'>{cartTotal}</span></span>
                </div>
                <div className='checkout-footer'>
                    <Button>Checkout</Button>
                </div>
            </div>
            </div>
    )
}

export default CheckoutComponent;