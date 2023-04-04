import {Outlet} from "react-router-dom";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

import Logo from "./navigation.logo.component";
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CardDropdown from "../../components/card-dropdown/cart-dropdown.component";
import {
    NavigationContainer,
    NavigationElements,
    NavigationLinksContainer,
    StyledNavLink,
    UserSettingsAndBagWrapper,
} from "./navigation.styles";
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
        <>
            <NavigationContainer>
                <motion.div
                    variants={animaVariants}
                    whileHover='hover'
                    whileTap='tap'
                    transition='effect'
                >
                    <StyledNavLink to='/'>
                        <Logo/>
                    </StyledNavLink>
                </motion.div>
                <NavigationElements>
                    <NavigationLinksContainer>
                        <motion.div
                            variants={animaVariants}
                            whileHover='hover'
                            whileTap='tap'
                            transition='effect'
                        >
                            <StyledNavLink className='nav-link upper-case' to='/shop'>
                                Shop
                            </StyledNavLink>
                        </motion.div>
                    </NavigationLinksContainer>

                    <NavigationLinksContainer>
                        {currentUser ? (
                            <UserSettingsAndBagWrapper>
                                <motion.div
                                    variants={animaVariants}
                                    whileHover='hover'
                                    whileTap='tap'
                                    transition='effect'
                                >
                                    <StyledNavLink className='nav-link upper-case' to='/auth'>Settings</StyledNavLink>
                                </motion.div>

                            </UserSettingsAndBagWrapper>
                        ) : (
                            <motion.div
                                variants={animaVariants}
                                whileHover='hover'
                                whileTap='tap'
                                transition='effect'
                            >
                                <StyledNavLink className='sign-in upper-case' to='/auth'>Sign In</StyledNavLink>
                            </motion.div>
                        )
                        }
                    </NavigationLinksContainer>
                    <NavigationLinksContainer>
                        <motion.div
                            variants={animaVariants}
                            whileHover='hover'
                            whileTap='tap'
                            transition='effect'
                        >
                            <CardIcon/>
                        </motion.div>
                    </NavigationLinksContainer>

                </NavigationElements>
                <CardDropdown/>
            </NavigationContainer>

            <Outlet/>

        </>
    )
};

export default Navigation;