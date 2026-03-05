import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { Route, Routes } from 'react-router';

function AppRouter() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
    )
}

export default AppRouter; 