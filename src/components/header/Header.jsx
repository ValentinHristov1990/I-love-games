import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                <Link to="/catalog">Catalog</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/create">Add Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    );
}