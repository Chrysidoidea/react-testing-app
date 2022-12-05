import {Routes, Route} from 'react-router-dom'
import Home from "./Routes/home/home.component";
import Merch from "./merch/merch-component";
import Navigation from "./Routes/navigation/navigation.component";
import Authenticaton from "./authentication/authenticaton.component";
import UserMenuComponent from "./components/user-menu/user-menu.component";

const App = () => {

    return (
        <Routes>
            <Route path='/react-testing-app/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='merch' element={<Merch/>}/>
                <Route path='auth' element={<Authenticaton/>}/>
                <Route path='user-menu' element={<UserMenuComponent/>}/>
            </Route>
        </Routes>
    )
}

export default App;