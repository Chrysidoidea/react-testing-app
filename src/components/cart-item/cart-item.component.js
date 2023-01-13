import "./cart-item.styles.scss";


import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";

const CartItem = ({cartItem}) => {
    const {name, quantity, id, price} = cartItem;
    const {removeItemFromCard, addItemToCart, deleteElement} = useContext(DropdownContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCard(cartItem);
    const deleteItemHandler = () => deleteElement(cartItem);

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
                            -
                        </div>
                        <span>{quantity}</span>
                        <div className="increment" onClick={addItemHandler}>
                            +
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
