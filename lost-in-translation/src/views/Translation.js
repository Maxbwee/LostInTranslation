import { translationAdd } from "../api/Translation"
import TranslationButton from "../components/TranslationComponents/TranslationButton"
import TranslationForm from "../components/TranslationComponents/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"


const SIGNS = [
    {
        id: 1,
        name: 'a',
        image: 'img/a.png'
    },
    {
        id: 2,
        name: 'b',
        image: 'img/b.png'
    },
    {
        id: 3,
        name: 'c',
        image: 'img/c.png'
    },
    {
        id: 4,
        name: 'd',
        image: 'img/d.png'
    },

]

const Translation = () => {


    const signs = SIGNS.map(sign => {
        return <TranslationButton key={sign.id} name={sign.name} image={sign.image} />
    })

    const { user, setUser } = useUser()
    //const [translation, setTranslation] = useState(null)

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

        console.log('ERROR', error);
        console.log('updatedUser', updatedUser);
    }

    return (
        <>
        <h1> Translation</h1>
        <section id="sign-option">
            {signs }
        </section>
        <section id="translation-notes">
        <TranslationForm  onTranslate={handleTranslateClicked} />
        </section>
        </>
    )

} 
export default withAuth(Translation)
