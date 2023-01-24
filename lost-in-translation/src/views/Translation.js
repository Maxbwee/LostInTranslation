import TranslationButton from "../components/TranslationComponents/TranslationButton"
import TranslationForm from "../components/TranslationComponents/TranslationForm"
import withAuth from "../hoc/withAuth"



const Translation = () => {

    
    return (
        <>
        <h1> Translation</h1>
        <section id="sign-option">
            <TranslationButton/>
        </section>
        <section id="translation-notes">
        <TranslationForm />
        </section>
        </>
    )

} 
export default withAuth(Translation)
