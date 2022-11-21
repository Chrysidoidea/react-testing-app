import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/home/home.component";
import SignIn from "./sign-in/sign-in.component";
import Navigation from "./Routes/navigation/navigation.component";

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
                <Route path='sign-in' element={<SignIn/>}/>
            </Route>

        </Routes>
    )
}

export default App;