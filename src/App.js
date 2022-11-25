import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authenticaton from "./authentication/authenticaton.component";
import AnimationEffectComponent from "./effects/animation-effect.component";
import UserMenuComponent from "./components/user-menu/user-menu.component";

const Merch = () => {
    return (
        <AnimationEffectComponent>
        <h1>Glory to Ukraine</h1>
        </AnimationEffectComponent>
    )
};




const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='merch' element={<Merch/>}/>
                <Route path='auth' element={<Authenticaton/>}/>
                <Route path='user-menu' element={<UserMenuComponent/>} />
            </Route>

        </Routes>
    )
}

export default App;