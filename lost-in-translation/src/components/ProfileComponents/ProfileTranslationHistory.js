import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import "../../styles/Profile.css"

// Component that maps out the users translated inputs
const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + "-" + translation} translation={translation} />
        )
    
    return(
        <section className="TranslationList">
            <h4>Your translation history </h4>
            <p>
            {translationList}
            </p>
        </section>
    )
}
export default ProfileTranslationHistory