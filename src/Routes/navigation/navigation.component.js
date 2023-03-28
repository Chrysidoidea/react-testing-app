import {Outlet, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {Fragment} from "react";
import Logo from "./navigation.logo.component";
import {useSelector} from "react-redux";


import CardIcon from "../../components/cart-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/cart-dropdown.component";

import './navigation.styles.scss';
import {selectCurrentUser} from "../../store/user/user.selector";


const animaVariants = {
    hover: {
        scale: 1.1
    },
    tap: {
        scale: 0.8
    },
    effect: {
        transition: {
            duration: 1
        }
    }
};


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)


    return (
        <Fragment>
            <div className='navigation-logo'>
                <motion.div
                    variants={animaVariants}
                    whileHover='hover'
                    whileTap='tap'
                    transition='effect'
                >
                    <NavLink className='logo-container' to='/'>
                        <Logo/>
                    </NavLink>
                </motion.div>
                <div className='navigation-elements'>
                    <motion.div
                        className='nav-links-container'
                        variants={animaVariants}
                        whileHover='hover'
                        whileTap='tap'
                        transition='effect'
                    >
                        <NavLink className='nav-link upper-case' to='/shop'>
                            Merch
                        </NavLink>
                    </motion.div>

                    <div className='nav-links-container'>
                        {currentUser ? (
                            <div className='nav-user-settings-container'>
                                <motion.div
                                    variants={animaVariants}
                                    whileHover='hover'
                                    whileTap='tap'
                                    transition='effect'
                                >
                                    <NavLink className='nav-link upper-case' to='/auth'>Settings</NavLink>
                                </motion.div>
                                <motion.div
                                    variants={animaVariants}
                                    whileHover='hover'
                                    whileTap='tap'
                                    transition='effect'
                                >
                                    <CardIcon/>
                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                variants={animaVariants}
                                whileHover='hover'
                                whileTap='tap'
                                transition='effect'
                            >
                                <NavLink className='sign-in upper-case' to='/auth'>Sign In</NavLink>
                            </motion.div>
                        )
                        }
                    </div>

                </div>
                <CardDropdown/>
            </div>

            <Outlet/>

        </Fragment>
    )
};

export default Navigation;