import '@css/recipe-generator.scss';
import {useState} from "react";
import Recipe from "@components/Recipe.jsx";

const RecipeGenerator = ({ingredients}) => {

    const minIngredientsRequired = 3;
    const [hasRecipe, setHasRecipe] = useState(false);
    const [recipe, setRecipe] = useState(null);

    function getRecipe(e){
        e.preventDefault();
        setHasRecipe(true);
    }

    function getRecipeSection(){


        //display recipe if we have one collected
        if(hasRecipe){
            return (
                <div className="recipe-section">
                    <Recipe data={{name: 'hello'}}/>
                </div>
            )
        }else{

        }


    }

    function subtitleText() {

        let value;

        if (ingredients.length >= minIngredientsRequired) {
            value = <span>
                Generate a recipe from your list of ingredients. We will search for a recipe with your <strong>{ingredients.length}</strong> ingredients
            </span>;
        } else {
            value = <span>Enter a few more ingredients from the search box above to get started</span>
        }
        return value;
    }

    function titleText() {
        let value

        if (ingredients.length >= minIngredientsRequired) {
            value = <span>Ready for a recipe?</span>
        } else {
            value =
                <span>You're just <strong>{minIngredientsRequired - ingredients.length}</strong> ingredients away from a recipe!</span>;
        }

        return value;
    }


    return (
        <>
            {ingredients.length > 0 &&
                <section className="recipe-generator">
                    <form>
                        <div className="primary">
                            <p className="title">{titleText()}</p>
                            <p className="subtitle">{subtitleText()}</p>
                        </div>
                        {ingredients.length >= minIngredientsRequired &&
                            <div className="secondary">
                                <button onClick={getRecipe}>Get a Recipe!</button>
                            </div>}
                    </form>
                    {getRecipeSection()}
                </section>
            }
        </>
    )
}
export default RecipeGenerator
