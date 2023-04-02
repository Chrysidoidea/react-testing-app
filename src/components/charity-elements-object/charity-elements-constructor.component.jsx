import CharityElementsComponent from "./charity-elements.component";
import {
    CategoriesSector,
} from './charity-elements-styles';

const CharityElementsConstructor = ({ charityElements }) => {

    return (

            <CategoriesSector>
            {charityElements.map((charityElement) => (
                    <CharityElementsComponent
                        key={charityElement.id}
                        charityElements={charityElement}
                   />
                ))}
                </CategoriesSector>
    );
};

export default CharityElementsConstructor;
