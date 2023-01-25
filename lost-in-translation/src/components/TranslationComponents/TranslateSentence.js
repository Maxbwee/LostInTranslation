const TranslateSentence = ({sign}) => {

    return (
        <section>
            <h4>Translation</h4>
            <img src={sign.image} alt={ sign.name} width="55" />
            <p></p>
        </section>
    )
}

export default TranslateSentence