import {
    CartDropdownItem,
    CartItemInterface,
    CartItemInterfaceButtonsWrapper,
    CartItemInterfaceCloseBtn,
    CartItemInterfaceWrapper,
    DecrementButton,
    IncrementButton,

} from "./cart-item.styles";

import {addItemToCart, removeItemFromCart, deleteElement} from "../../../store/cart-dropdown/cart-dropdown.reducer";
import {useDispatch} from "react-redux";


const CartItem = ({cartItem}) => {
    const {name, quantity, id, price} = cartItem;
    const dispatch = useDispatch()

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItem));

    return (
        <CartDropdownItem>
            <img
                src={`https://ik.imagekit.io/pc5qtjvyw/Charity-proj/specimen_${id}.jpg`}
                alt={id}
            />
            <CartItemInterfaceWrapper>
                <h2>{name}</h2>
                <CartItemInterface>
                    <CartItemInterfaceButtonsWrapper>
                        <DecrementButton onClick={removeItemHandler}>
                                <span>-</span>
                        </DecrementButton>
                        <span>{quantity}</span>
                        <IncrementButton onClick={addItemHandler}>
                                <span>+</span>
                        </IncrementButton>
                    </CartItemInterfaceButtonsWrapper>
                    <h2><span>$</span>{quantity * price}</h2>
                </CartItemInterface>
            </CartItemInterfaceWrapper>
            <CartItemInterfaceCloseBtn onClick={deleteItemHandler}>
                &#10005;
            </CartItemInterfaceCloseBtn>
        </CartDropdownItem>
    );
};

export default CartItem;
