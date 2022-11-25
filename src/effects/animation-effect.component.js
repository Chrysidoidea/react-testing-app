import { motion } from 'framer-motion';

const animations = {
    initial: {opacity: .1},
    animate: {opacity: 1},
    exit: {opacity: 0}
}


const AnimationEffectComponent = ({children}) => {
    return (
        <motion.div
            variants={animations}
            transition={{duration: .5}}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {children}
        </motion.div>
    )
}

export default AnimationEffectComponent;