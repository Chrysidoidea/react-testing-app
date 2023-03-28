import CharityElementsComponent from "../charity-elements-object/charity-elements.component";


const CharityElementsConstructor = ({ charityElements }) => {

    return (

            <div className="categories-container">
            {charityElements.map((charityElement) => (
                    <CharityElementsComponent
                        key={charityElement.id}
                        charityElements={charityElement}
                   />
                ))}
                </div>
    );
};

export default CharityElementsConstructor;
