import { Route, Routes } from "react-router"
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

function App() {
    const [user, setUser] = useState(null);

    const registerUserHandler = (userData) => {
        setUser(userData);
    }

    return (
        <>
            <Header user={user} />
            {user && <p>Welcome, {user.email}</p>}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/register" element={<Register onRegister={registerUserHandler} />} />
                <Route path="/games/:gameId" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
