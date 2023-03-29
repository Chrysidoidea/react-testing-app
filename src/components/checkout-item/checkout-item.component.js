import './checkout-item.styles.scss';

import {addItemToCart, removeItemFromCart, deleteElement} from "../../store/cart-dropdown/cart-dropdown.reducer";
import {useDispatch} from "react-redux";

const CheckoutItemComponent = ({cartItem}) => {
    const {id, name, quantity, price} = cartItem;
    const dispatch = useDispatch();

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItem));



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