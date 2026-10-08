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

function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    const UserHandler = (userData) => {
        setUser(userData);
    }

    const logoutAction = (userData) => {
        setUser(null);
    };

    return (
        <>
            <Header isAuthenticated={!!user} />
            {user && <p>Welcome, {user.email}</p>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/games/:gameId/edit" element={<Edit />} />
                <Route path="/register" element={<Register onRegister={UserHandler} />} />
                <Route path="/games/:gameId" element={<Details />} />
                <Route path="/login" element={<Login onLogin={UserHandler} />} />
                <Route path="/create" element={<Create />} />
                <Route path="/logout" element={<Logout onLogout={logoutAction} />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
