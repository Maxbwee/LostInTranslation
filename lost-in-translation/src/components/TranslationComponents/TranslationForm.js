import { useForm } from "react-hook-form"
import "../../styles/Translation.css"

const TranslationForm = ({ onTranslate }) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = ({translationNotes}) => {
        onTranslate(translationNotes)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="InputWithButton">
                <input className="TranslationInput" 
                type="text" 
                {...register('translationNotes')} 
                placeholder="Translate something"
                />
                <button className="TranslateButton" type="submit" > Translate </button>
            </div>
            
        </form>
    )
}

export default TranslationForm