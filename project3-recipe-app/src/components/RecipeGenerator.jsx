import '@css/recipe-generator.scss';
import {useState} from "react";
import Recipe from "@components/recipe/Recipe.jsx";

const RecipeGenerator = ({ingredients}) => {

    const minIngredientsRequired = 3;
    const [hasSearchedRecipes, setHasSearchedRecipes] = useState(false);
    const [recipes, setRecipes] = useState(null);

    function getRecipes(e) {
        e.preventDefault();
        fetchRecipes('apple');

    }

    function fetchRecipes(searchterm) {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Edamam-Account-User': 'scodrington'
        }


        let baseUrl = "https://api.edamam.com/api/recipes/v2";

        let appId = "4e1c40ce";
        let appKey = "cdec51cf61393d7a2a90f499218fa03c";

        let queryVal = searchterm;
        let requestUrl = `${baseUrl}?q=${queryVal}&app_id=${appId}&app_key=${appKey}&type=public`;

        try {

            const response = fetch(requestUrl, {
                'headers': headers,
                'method': 'GET'
            }).then(response => {

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }).then(data => {

                let recipes = []

                if (data.hits.length > 0) {
                    data.hits.map(item => {
                        let recipe = item.recipe;
                        let links = item._links;
                        recipes.push(recipe);
                    })
                } else {

                }

                setRecipes(recipes);
                setHasSearchedRecipes(true);
            })
        } catch (error) {
            console.error('fetch error', error);
        }
    }

    ///Called when we have a recipe to show!
    function getRecipeSection() {


        //recipes never searched, return
        if(recipes == null){
            return;
        }

        if(recipes.length > 0 ){

            let recipeComponent = recipes.map(item => {
                return <Recipe data={item}/>
            })

            return (
                <div className="recipe-section">
                    {recipeComponent}
                </div>
            )
        }else{
            return (
                <div className="recipe-section">
                    <p>there were no recipes found!</p>
                </div>
            )
        }



        /*
        //display recipe if we have one collected
        if (hasRecipe) {
            return (
                <div className="recipe-section">

                </div>
            )
        } else {

        }*/

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
                                <button onClick={getRecipes}>Get a Recipe!</button>
                            </div>}
                    </form>
                    {getRecipeSection()}
                </section>
            }
        </>
    )
}
export default RecipeGenerator
