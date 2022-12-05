import './merch.styles.scss'
import Button from "../button/button.component";
//>>
import {useContext} from "react";
import { DropdownContext } from "../../contexts/cart-dropdown-handler.context";

//>>


const MerchCard = ({merch}) => {

    const {id, name, price} = merch;
    const {addItemToCart} = useContext(DropdownContext);

    const addMerchToCart = () => addItemToCart(merch);




    return (
        <div className="merch-card-container" id={id}>
            <a href={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`}>
                    <img src={process.env.PUBLIC_URL + `/merch/specimen_${id}.jpg`}
                         alt={`${name} — ${id}`}
                    />
            </a>

                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{`${price}$`}</span>
                    </div>
            <Button onClick={addMerchToCart}>Add to cart</Button>
                </div>
    );


}

export default MerchCard;
