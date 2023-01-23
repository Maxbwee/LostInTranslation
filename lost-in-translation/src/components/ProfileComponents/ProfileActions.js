import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete } from "../../utils/storage"

const ProfileActions = () => {


    const {  setUser } = useUser()
    
    // send event to parent component   
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    
    return(
        <ul>
            <li><Link to="/translation">Translation</Link></li>
            <li><button>Clear translations</button></li>
            <li><button onClick = {handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions