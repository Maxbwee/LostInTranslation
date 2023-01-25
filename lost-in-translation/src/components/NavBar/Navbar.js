import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import "../../styles/Navbar.css"

const Navbar = () => {


    const { user } = useUser()

    return(
        <nav id="nav-bar">
            
                <p id="nav-title">Lost in Translation</p>
           


            { user !== null &&
                <ul>
                    <li>
                        <NavLink to="/translation">Translations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar