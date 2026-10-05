import { Route, Routes } from "react-router"
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

    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/register" element={<Register />} />
                <Route path="/details" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<Create />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
