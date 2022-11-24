import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authenticaton from "./authentication/authenticaton.component";

const Que = () => {
    return (
        <h1>Glory to Ukraine</h1>
    )
};




const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='que' element={<Que/>}/>
                <Route path='auth' element={<Authenticaton/>}/>
            </Route>

        </Routes>
    )
}

export default App;