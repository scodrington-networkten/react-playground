
const Recipe = ({data}) => {

    let {
        label,
        ingredients = [],
        digest = []
    } = data;

    console.log(data);
    return(
        <>
            <p>{label}</p>
        </>
    )
}
export default Recipe;
