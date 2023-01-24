import { translationAdd } from "../api/Translation"
import TranslationButton from "../components/TranslationComponents/TranslationButton"
import TranslationForm from "../components/TranslationComponents/TranslationForm"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"


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

    const { user } = useUser()
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
        const [error, result ] = await translationAdd(user, translation)

        console.log('ERROR', error);
        console.log('RESULT', result);
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
