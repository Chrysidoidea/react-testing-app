import './checkout-item.styles.scss';

import {useSelector} from "react-redux";
import {addItemToCart, removeItemFromCard, deleteElement} from "../../store/cart-dropdown/cart-dropdown.action";
import {selectCartItems} from "../../store/cart-dropdown/cart-dropdown.selector";
import {useDispatch} from "react-redux";

const CheckoutItemComponent = ({cartItem}) => {
    const {id, name, quantity, price} = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCard(cartItems, cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItems, cartItem));



    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price * quantity}</span>
            <div className='remove-button' onClick={deleteItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItemComponent;