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
                        <NavLink className="TranslationLink" to="/translation">Translations</NavLink>
                    </li>
                    <li>
                        <NavLink className="ProfileLink" to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar