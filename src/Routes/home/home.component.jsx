import {Outlet} from 'react-router-dom';

import AnimationComponent from "../../effects/Animation.component";
import charityElements from "../../shop-data";
import CharityElementsConstructor
    from "../../components/charity-elements-object/charity-elements-constructor.component";

const Home = () => {

    return (
        <AnimationComponent>
            <>
                <Outlet/>
                <CharityElementsConstructor charityElements={charityElements}/>
            </>
        </AnimationComponent>
    )
}

export default Home;
