import { Link } from "react-router";

export default function Header({
    isAuthenticated,
}) {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/"> <img src="./images/logo.png" alt="logo" /> </Link>
                <Link to="/catalog">Catalog</Link>

                {
                    isAuthenticated ?
                        <div id="user">
                            <Link to="/create">Add Game</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                        :
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                }

            </nav>
        </header>
    );
}