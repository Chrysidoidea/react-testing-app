import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";


import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authentication from "./authentication/authenticaton.component";
import UserMenuComponent from "./components/user-menu/user-menu.component";
import CheckoutComponent from "./Routes/checkout/checkout.component";
import SignInForm from "./components/sign-in-form/sign-in.component";
import SignUpForm from "./components/sign-up-form/sign-up-form.component";

// import {checkUserSession} from "./store/user/user.action";
import ErrorPageComponent from "./components/error-page/error-page.component";
import CategoryItemComponent from "./components/category-item/category-item.component";
import {isUserAuthenticated} from "./store/user/user.utils";

const LazyShop = React.lazy(() => import('./merch/merch-component'));
const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(isUserAuthenticated())
    }, []);

    return (
        <AnimatePresence wait>
            <Navigation/>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home/>}/>
                <Route exact path='shop' element={
                    <React.Suspense>
                    <LazyShop/>
                    </React.Suspense>
                }/>
                <Route path='shop/:name' element={<CategoryItemComponent/>}/>
                <Route exact path='auth' element={<Authentication/>}>
                    <Route index element={<SignInForm/>}/>
                    <Route exact path='auth' element={<UserMenuComponent/>}/>
                    <Route exact path='sign-in' element={<SignInForm/>}/>
                    <Route exact path='sign-up' element={<SignUpForm/>}/>
                </Route>
                <Route exact path='checkout' element={<CheckoutComponent/>}/>
                <Route exact path='*' element={<ErrorPageComponent/>}/>
            </Routes>

        </AnimatePresence>
    )
}

export default App;

