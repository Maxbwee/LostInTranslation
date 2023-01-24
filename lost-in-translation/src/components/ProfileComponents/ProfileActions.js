import { Link } from "react-router-dom"
import { translationClearHistory } from "../../api/Translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {


    const { user, setUser } = useUser()
    
    // send event to parent component
    // when clicked the user will be logged out
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    
    const handleClearHistoryClick = async () => {
        if(!window.confirm('Are you sure you want to clear history?')) {
            return
        }
        
        const [clearError] = await translationClearHistory(user.id)
        
        if (clearError !== null) {
            // Do something 
            return
        }
        
        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER,updatedUser)
        setUser(updatedUser)
    }
    
    return(
        <ul>
            <li><Link to="/translation">Translation</Link></li>
            <li><button onClick={handleClearHistoryClick}>Clear translations</button></li>
            <li><button onClick = {handleLogoutClick}>Logout</button></li>
        </ul>
    )
}
export default ProfileActions