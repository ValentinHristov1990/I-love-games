import { useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {

    const navigate = useNavigate();

    const submitAction = (formData) => {

        const { email, password } = Object.fromEntries(formData);

        if (!email || !password) {
            alert("All fields are required!");
            return;
        }

        onLogin({ email, password });
        navigate("/")
    }
    return (
        // <!-- Login Page ( Only for Guest users ) -->
        <section id="login-page">

            <form id="login" action={submitAction}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label htmlFor="login-pass">Password</label>
                    <input type="password" id="login-password" name="password" placeholder="Password" />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
}