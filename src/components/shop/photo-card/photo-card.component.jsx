import {useDispatch} from "react-redux";

import Button, {BUTTON_TYPE_CLASSES} from "../../button/button.component";
import {addItemToCart} from "../../../store/cart-dropdown/cart-dropdown.reducer";

import {
    ImageWrapper,
    PhotoCardContainer,
    PhotoCardFooter,
    StyledLazyLoadImage,
} from './photo-card.styles';

const PhotoCard = ({merch}) => {
    const dispatch = useDispatch();

    const {id, name, price} = merch;

    const addMerchToCart = () => dispatch(addItemToCart(merch));

    return (
        <PhotoCardContainer id={id}>
            <ImageWrapper>
                <StyledLazyLoadImage
                    src={`https://ik.imagekit.io/pc5qtjvyw/tr:w-450/Charity-proj/specimen_${id}.jpg?updatedAt=1679337974373`}
                    alt={`${name} — ${id}`}
                    effect='blur'
                    delayTime='1000'
                    placeholderSrc={`https://ik.imagekit.io/pc5qtjvyw/Charity-proj/specimen_${id}.jpg?updatedAt=1679337974373`}
                />
            </ImageWrapper>

            <PhotoCardFooter>
                <span>{name}</span>
                <span>{`${price}$`}</span>
            </PhotoCardFooter>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.shopCard}
                onClick={addMerchToCart}
            >Add to cart
            </Button>
        </PhotoCardContainer>
    );
}
export default PhotoCard;
