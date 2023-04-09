import AnimationComponent from "../../../effects/Animation.component";
import {
    CategoryBodyContainer,
    CategoryContainer,
    EntranceLogo,
    EntranceLogoImage,
    EntranceLogoLink,
    ImageContainer,
} from "./charity-elements-styles";

const CharityElementsComponent = ({charityElements}) => {
    const {title, info, imageURL, logoURL, URL} = charityElements;

    return (
        <AnimationComponent>
            <CategoryContainer>
                <ImageContainer imageUrl={imageURL}/>
                <CategoryBodyContainer>
                    <h2>{title}</h2>
                    <EntranceLogo>
                        <EntranceLogoLink
                            href={URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {info}
                        </EntranceLogoLink>
                        <EntranceLogoImage
                            href={URL}
                            className="logo-image"
                            target="_blank"
                            rel="noreferrer"
                            logoURL={logoURL}
                            aria-label="charity name logo"
                        >
                            <span style={{display: "none"}}>charity name logo</span>
                        </EntranceLogoImage>
                    </EntranceLogo>
                </CategoryBodyContainer>
            </CategoryContainer>
        </AnimationComponent>
    );
};

export default CharityElementsComponent;
