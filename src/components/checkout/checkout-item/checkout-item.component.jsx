import {
    CheckoutItemsContainer,
    Image,
    ImageContainer,
    QuantityHandlerContainer,
} from "./checkout-item.styles";

import {addItemToCart, removeItemFromCart, deleteElement} from "../../../store/cart-dropdown/cart-dropdown.reducer";
import {useDispatch} from "react-redux";


const CheckoutItemComponent = ({cartItem}) => {
    const {id, name, quantity, price} = cartItem;
    const dispatch = useDispatch();

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItem));



    return (
        <CheckoutItemsContainer>
            <ImageContainer>
                <Image src={`https://ik.imagekit.io/pc5qtjvyw/Charity-proj/specimen_${id}.jpg`} alt={name}/>
            </ImageContainer>
            <span>{name}</span>
            <QuantityHandlerContainer>
                <div onClick={removeItemHandler}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={addItemHandler}>&#10095;</div>
            </QuantityHandlerContainer>
            <span>{price * quantity}</span>
            <div onClick={deleteItemHandler}>&#10005;</div>
        </CheckoutItemsContainer>
    )
}

export default CheckoutItemComponent;