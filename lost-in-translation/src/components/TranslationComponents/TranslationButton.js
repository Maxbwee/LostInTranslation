
const TranslationButton = ({letter, image}) => {
    return(
        <button>
            <aside>
                <img src={image} alt={letter} width="55"/>
            </aside>
            <section>
                <b> { letter } </b>
            </section>
        </button>
    )
}

export default TranslationButton