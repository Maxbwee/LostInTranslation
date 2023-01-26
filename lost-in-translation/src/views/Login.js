import LoginForm from "../components/LoginComponents/LoginForm"
import "../styles/Login.css"

export default function Login() {

    // Basic functionality for the Login page. All components will be rendered on this page
        return (
            <div id="login-div">
            <img id="logo" src='/img/Logo.png' alt="login-logo"/>
            <h1 id="login-title">Lost in Translation</h1>
            <LoginForm/>
            </div>

        )
    
    } 