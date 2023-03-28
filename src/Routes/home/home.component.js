import {Outlet} from 'react-router-dom';
import AnimationComponent from "../../effects/Animation.component";

import CharityElementsConstructorComponent
    from "../../components/charity-elements-constructor/charity-elements-constructor.component";
import charityElements from "../../shop-data";

const Home = () => {

    return (
        <AnimationComponent>
            <div>
                <Outlet/>
                <CharityElementsConstructorComponent charityElements={charityElements}/>
            </div>
        </AnimationComponent>
    )
}

export default Home;
