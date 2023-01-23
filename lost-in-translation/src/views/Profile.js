import ProfileActions from "../components/ProfileComponents/ProfileActions"
import ProfileHeader from "../components/ProfileComponents/ProfileHeader"
import ProfileTranslationHistory from "../components/ProfileComponents/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"



const Profile = () => {

    const { user} = useUser()


    return (
        <>
        <h1>Profile</h1>
        <ProfileHeader username={user.username}/>
        <ProfileActions/>
        <ProfileTranslationHistory translations= {user.translations} />
        </>
    )

} 

export default withAuth(Profile)