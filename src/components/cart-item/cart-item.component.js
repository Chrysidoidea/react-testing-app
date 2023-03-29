import "./cart-item.styles.scss";

import {addItemToCart, removeItemFromCart, deleteElement} from "../../store/cart-dropdown/cart-dropdown.reducer";
import {useDispatch} from "react-redux";


const CartItem = ({cartItem}) => {
    const {name, quantity, id, price} = cartItem;
    const dispatch = useDispatch()

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItem));

    return (
        <div className="card-item-dropdown">
            <img
                src={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`}
                alt={id}
            />
            <div className="card-item-attributes-container">
                <h2>{name}</h2>
                <div className="card-item-attributes">
                    <div className="quantity-container">
                        <div className="decrement" onClick={removeItemHandler}>
                            <span>-</span>
                        </div>
                        <span>{quantity}</span>
                        <div className="increment" onClick={addItemHandler}>
                                <span>+</span>
                        </div>
                    </div>
                    <div className="attribute-price">
                        <h2>$ {quantity * price}</h2>
                    </div>
                </div>
            </div>
            <div className="card-item-close" onClick={deleteItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CartItem;
