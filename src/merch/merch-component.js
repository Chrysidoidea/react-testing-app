import {useContext} from "react";
import {MerchContext} from "../contexts/merch.context";
import AnimationEffectComponent from "../effects/animation-effect.component";

import MerchCard from "../components/merch-card/merch-card.component";

const Merch = () => {
    const {merch} = useContext(MerchContext);

    return (
        <AnimationEffectComponent>
            <div className="merch-container">
                {merch.map((merch) => (
                    <MerchCard key={merch.id} merch={merch}/>
                ))}
            </div>
        </AnimationEffectComponent>
    )

}

export default Merch;