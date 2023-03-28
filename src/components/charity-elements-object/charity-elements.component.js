import "./charity-elements-styles.scss";
import AnimationComponent from "../../effects/Animation.component";
const CharityElementsComponent = ({charityElements}) => {
    const {title, info, imageURL, logoURL, URL} = charityElements;

    return (
        <AnimationComponent>
        <div className="category-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageURL})`,
                }}
            />
            <div className="category-body-container">
                <h2>{title}</h2>

                    <div className="entrance-logo">
                        <a href={URL} className="phone-media-href">
                        <p className="phone-media-href">{info}</p>
                        </a>
                        <a
                            href={URL}
                            className="logo-image"
                            style={{
                                backgroundImage: `url(${logoURL})`,
                            }}
                            aria-label="charity name logo"
                        ><span style={{ display: 'none' }}>charity name logo</span></a>
                    </div>

            </div>
        </div>
            </AnimationComponent>
            );
};

export default CharityElementsComponent;
