import { Route, Routes, useNavigate } from "react-router"
import { useState } from "react";
import Catalog from "./components/catalog/Catalog"
import Create from "./components/create/Create"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Logout from "./components/logout/Logout";
import { register } from "./api/authApi";

function App() {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate()

    const userAuthHandler = async (userData) => {
        try {
            const data = await register(userData);
            setAuth(data);
        } catch (error) {
            alert(error.message);
        }
    }

    const logoutAction = () => {
        setAuth(null);
    };

    return (
        <>
            <Header isAuthenticated={!!auth} />
            {auth && <p>Welcome, {auth.email}</p>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/register" element={<Register onRegister={userAuthHandler} />} />
                <Route path="/games/:gameId" element={<Details user={auth} />} />
                <Route path="/login" element={<Login onLogin={userAuthHandler} />} />
                <Route path="/create" element={<Create />} />
                <Route path="/logout" element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
