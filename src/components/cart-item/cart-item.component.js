import "./cart-item.styles.scss";

import {useContext} from "react";
import {DropdownContext} from "../../contexts/cart-dropdown-handler.context";

const CartItem = ({cartItem}) => {
    const {name, quantity, id, price} = cartItem;
    const {decrement, increment, deleteElement} = useContext(DropdownContext);

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
                        <div className="decrement" onClick={() => decrement(cartItem)}>
                            -
                        </div>
                        <span>{quantity}</span>
                        <div className="increment" onClick={() => increment(cartItem)}>
                            +
                        </div>
                    </div>
                    <div className="attribute-price">
                        <h2>${price}</h2>
                    </div>
                </div>
            </div>
            <div className="card-item-close" onClick={() => deleteElement(cartItem)}>
                x
            </div>
        </div>
    );
};

export default CartItem;
