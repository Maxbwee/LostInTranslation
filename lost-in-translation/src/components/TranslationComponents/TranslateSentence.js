import "../../styles/Translation.css"

const TranslateSentence = ({sentenceArray}) => {

    console.log(sentenceArray)

    if(!sentenceArray) {
        return
    }

    // This maps through the array of characters
    // and returns individual signs that correspond the character
    const signList = sentenceArray.map((character, index) => 

        (character !== " " && <img key={ index + "-" + character } src= { "img/" + character + ".png"}  alt="text-to-sign"/>)
    )

    return (
        
        <section className="TranslationOutput">
            <h4>Translation: </h4>
            
            <p className="Signs">
                {signList}
            </p>
        </section>
    )
}

export default TranslateSentence