import { useState } from "react"
import { translationAdd } from "../api/Translation"
import TranslateSentence from "../components/TranslationComponents/TranslateSentence"
import TranslationForm from "../components/TranslationComponents/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"
import "../styles/Translation.css"




const Translation = () => {


   // const signs = SIGNS.map(sign => {
    //    return <TranslationButton key={sign.id} name={sign.name} image={sign.image} />
    //})

    const { user, setUser } = useUser()
    const [ translation, setTranslation ] = useState(null)

    // check if theres a translation
    // combine translation with note
    // send HTTP request
    const handleTranslateClicked = async (notes) => {
        
        if(!notes){
           alert('Please enter a translation first')
           return
       }

        const translation = notes
        const [error, updatedUser ] = await translationAdd(user, translation)

        if(error !== null) {
            return
        }

        // Keeps UI state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser )
        // Updates context state
        setUser(updatedUser)

        const sentenceArray = notes.split("")
        setTranslation(sentenceArray)

        console.log('ERROR', error);
        console.log('updatedUser', updatedUser);
        
    }

    return (
        <>
        <div className="TranslationForm">
        <img className="logo-hello" src='/img/Logo-Hello.png' alt="login-logo"/>
        <h1 className="TranslationTitle"> Translation</h1>
        <div>
        <TranslationForm  onTranslate={handleTranslateClicked} />
        </div>
        </div>
        <div className="TranslatedSentence">
        <TranslateSentence sentenceArray={translation}/>
        </div>
        </>
    )

} 
export default withAuth(Translation)
