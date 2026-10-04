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
            <Home />
            <Catalog />
            <Footer />
            <Edit />
            <Details />
            <Login />
            <Register />
            <Create />

        </>
    )
}

export default App
