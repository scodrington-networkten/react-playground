
import '@css/recipe.scss';

const Recipe = ({data}) => {

    let {
        label,
        ingredients = [],
        digest = [],
        image,
        images = [],
        uri,
        url,
        cuisineType = [],
        calories,
        dishType
    } = data;

    const getIngredients =() => {

        let content = ingredients.map((item, index) => {
            return <li key={index}>{item.text}</li>
        });

        return <ul>{content}</ul>;
    }

    return(
        <article className="recipe">
            <section className="info-section">
                <h2>{label}</h2>
                <p>Cuisine Type: {cuisineType.join(", ")}</p>
                <p>Dish Type: {dishType.join(", ")}</p>
                <section className="recipe-ingredient-list">
                    <h3>Ingredient List</h3>
                    {getIngredients()}
                </section>
                <a href={url} alt="link to recipe">View this recipe externally</a>
            </section>

            <section className="image-section">
                <img src={image} alt="recipe image"/>
            </section>

        </article>
    )
}
export default Recipe;
