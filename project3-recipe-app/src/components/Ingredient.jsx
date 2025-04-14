const Ingredient = (props) => {

    const {
        name,
    } = props.data;

    return (
        <>
            <div className="ingredient-item">
                <p>
                    <span className="name">{name}</span>
                </p>
            </div>
        </>
    )
}
export default Ingredient
