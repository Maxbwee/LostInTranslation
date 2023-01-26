import { useEffect } from "react"
import { userById } from "../api/User"
import ProfileActions from "../components/ProfileComponents/ProfileActions"
import ProfileHeader from "../components/ProfileComponents/ProfileHeader"
import ProfileTranslationHistory from "../components/ProfileComponents/ProfileTranslationHistory"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import "../styles/Profile.css"


// Profile page. The user can redirect here through the navbar
const Profile = () => {

    const { user, setUser} = useUser()

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser ] = await userById(user.id)
            if (error === null ) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
            
        }
        findUser()
    }, [ setUser, user.id ])

    // Renders all the actions that are used on the profile page.
    return (
        <>
        <div className="ProfileBg">
        <h1 className="ProfileTitle">{user.username}'s profile page </h1>
        
        <ProfileHeader username={user.username}/>
        <ProfileTranslationHistory translations= {user.translations} />
        <ProfileActions/>
        
        <img className="LogoProfile" src='/img/Logo-Hello.png' alt="login-logo"/>
        <p className="RobotText">To clear your translations click the button!</p>
        </div>
        </>
    )

} 

export default withAuth(Profile)