import LoginForm from "../components/LoginComponents/LoginForm"
import "../styles/Login.css"

export default function Login() {

    
        return (
            <div id="login-div">
            <img id="logo" src='/img/Logo.png' alt="login-logo"/>
            <h1 id="login-title">Lost in Translation</h1>
            <LoginForm/>
            </div>

        )
    
    } 