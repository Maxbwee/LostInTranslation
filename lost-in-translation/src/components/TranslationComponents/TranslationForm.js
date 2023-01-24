import { useForm } from "react-hook-form"

const TranslationForm = ({ onTranslate }) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = ({translationNotes}) => {
        onTranslate(translationNotes)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translation-notes">Translation notes:</label>
                <input type="text" {...register('translationNotes')} />
            </fieldset>
            <button type="submit" > Translate </button>
        </form>
    )
}

export default TranslationForm