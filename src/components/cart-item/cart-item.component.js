import "./cart-item.styles.scss";

import {addItemToCart, removeItemFromCard, deleteElement} from "../../store/cart-dropdown/cart-dropdown.action";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart-dropdown/cart-dropdown.selector";
import {useDispatch} from "react-redux";


const CartItem = ({cartItem}) => {
    const {name, quantity, id, price} = cartItem;
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCard(cartItems, cartItem));
    const deleteItemHandler = () => dispatch(deleteElement(cartItems, cartItem));

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
