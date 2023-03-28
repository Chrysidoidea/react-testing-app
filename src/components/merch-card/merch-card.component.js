import './merch.styles.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useDispatch, useSelector} from "react-redux";
import Button from "../button/button.component";
import {addItemToCart} from "../../store/cart-dropdown/cart-dropdown.action";
import {selectCartItems} from "../../store/cart-dropdown/cart-dropdown.selector";
import {LazyLoadImage} from 'react-lazy-load-image-component';

const MerchCard = ({merch}) => {
    const dispatch = useDispatch();

    const {id, name, price} = merch;
    const cartItems = useSelector(selectCartItems);

    const addMerchToCart = () => dispatch(addItemToCart(cartItems, merch));

    return (
        <div className="merch-card-container" id={id}>
                <LazyLoadImage
                     src={`https://ik.imagekit.io/pc5qtjvyw/tr:w-450/Charity-proj/specimen_${id}.jpg?updatedAt=1679337974373`}
                     alt={`${name} — ${id}`}
                     effect='blur'
                     delayTime='1000'
                    placeholderSrc={`https://ik.imagekit.io/pc5qtjvyw/Charity-proj/specimen_${id}.jpg?updatedAt=1679337974373`}
                />

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`${price}$`}</span>
            </div>
            <Button
                buttonType='shopCard'
                onClick={addMerchToCart}
            >Add to cart
            </Button>
        </div>
    );

}

export default MerchCard;
