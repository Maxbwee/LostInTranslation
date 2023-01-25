
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
        <div>
            <div>
                <button className="LogoutButton" onClick = {handleLogoutClick}>Logout</button>
            </div>
            <div>
                <button className="ClearHistoryButton" onClick={handleClearHistoryClick}>Clear translations</button>
            </div>
        </div>
    )
}
export default ProfileActions