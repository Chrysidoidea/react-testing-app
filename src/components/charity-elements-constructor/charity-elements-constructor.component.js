import CharityElementsComponent from "../charity-elements-object/charity-elements.component";
import AnimationEffectComponent from "../../effects/animation-effect.component";

const CharityElementsConstructor = ({ charityElements }) => {
    return (
        <AnimationEffectComponent>
            <div className="categories-container">
                {charityElements.map((charityElement) => (
                    <CharityElementsComponent
                        key={charityElement.id}
                        charityElements={charityElement}
                    />
                ))}
            </div>
        </AnimationEffectComponent>
    );
};

export default CharityElementsConstructor;
