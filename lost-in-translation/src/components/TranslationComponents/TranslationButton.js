
const TranslationButton = ({sign, image}) => {
    return(
        <button>
            <aside>
                <img src={image} alt={sign} width="55"/>
            </aside>
            <section>
                <b> { sign } </b>
            </section>
        </button>
    )
}

export default TranslationButton