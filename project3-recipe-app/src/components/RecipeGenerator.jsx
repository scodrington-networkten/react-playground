import '@css/recipe-generator.scss';
const RecipeGenerator = ({ingredients}) => {


    const getOutput = () => {
        return <p>Hello world</p>;
    }

    function getOutputNew(){
        return <p>Hello world</p>;
    }

    return (
        <>
            {ingredients.length > 0 &&
            <section className="recipe-generator">
                <form>
                    <div className="primary">
                        <p className="title">Ready for a recipe?</p>
                        <p className="subtitle">Generate a recipe from your list of ingredients. We will search for a recipe with your <strong>{ingredients.length}</strong> ingredients</p>
                    </div>
                    <div className="secondary">
                        <button>Get a Recipe</button>
                    </div>
                </form>
            </section>
            }
        </>
    )
}
export default RecipeGenerator
