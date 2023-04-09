import {motion} from "framer-motion";

import React from "react";

const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0}
}

const AnimationEffectComponent = ({children}) => {

    return (

        <motion.div
            variants={animations}
            transition={{duration: .55}}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>

    )
}

export default AnimationEffectComponent;