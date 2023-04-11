import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import CartDropdown from "./components/card-dropdown/cart-dropdown.component";
import Home from "./components/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authentication from "./components/authentication/authenticaton.component";
import UserMenuComponent from "./components/user-menu/user-menu.component";
import CheckoutComponent from "./components/checkout/checkout.component";
import SignInForm from "./components/authentication/sign-in-form/sign-in.component";
import SignUpForm from "./components/authentication/sign-up-form/sign-up-form.component";
import StartingPageComponent from "./components/starting-page/starting-page.component";

import ErrorPageComponent from "./components/error-page/error-page.component";
import CategoryItemComponent from "./components/shop/category-item/category-item.component";
import {isUserAuthenticated} from "./store/user/user.utils";
import {selectCartIsActive} from "./store/cart-dropdown/cart-dropdown.selector";
import {AlertComponent} from "./components/alert/alert.component";


const LazyShop = React.lazy(() => import("./components/shop/shop-component"));
const App = () => {
    const isActive = useSelector(selectCartIsActive);
    const dispatch = useDispatch();
    const location = useLocation();
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        dispatch(isUserAuthenticated())
    }, []);

    useEffect(() => {
        const time = setTimeout(() => {
            setAlert(true);
            return clearTimeout(time);
        },5000);


    }, [])

    return (
        <AnimatePresence wait>
            <Navigation/>
            <AnimatePresence>
            {alert ? <AlertComponent setAlert={setAlert}/>: null}
            </AnimatePresence>
            <AnimatePresence>
            {isActive ? <CartDropdown key={"cdd1"}/> : null}
            </AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home/>}/>
                <Route exact path="react-testing-app" element={<StartingPageComponent/>}/>
                <Route exact path="shop" element={
                    <React.Suspense>
                    <LazyShop/>
                    </React.Suspense>
                }/>
                <Route path="shop/:name" element={<CategoryItemComponent/>}/>
                <Route exact path="auth" element={<Authentication/>}>
                    <Route index element={<SignInForm/>}/>
                    <Route exact path="auth" element={<UserMenuComponent/>}/>
                    <Route exact path="sign-in" element={<SignInForm/>}/>
                    <Route exact path="sign-up" element={<SignUpForm/>}/>
                </Route>
                <Route exact path="checkout" element={<CheckoutComponent/>}/>
                <Route exact path="*" element={<ErrorPageComponent/>}/>
            </Routes>

        </AnimatePresence>
    )
}

export default App;

