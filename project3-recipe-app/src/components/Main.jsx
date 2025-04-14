import IngredientPicker from "@components/IngredientPicker.jsx";
import Ingredient from "@components/Ingredient.jsx";
import '@css/main.scss';
const Main = () => {

    let ingredients = ["apple", "banana", "mango"];
    let components = ingredients.map((item, index) => {
        return <li><Ingredient data={{name: item}} key={index}/></li>
    });


    return (
        <main className="main-content">
            <div className="inner">
                <IngredientPicker/>
                <ul>
                    {components}
                </ul>

            </div>
        </main>
    )
}
export default Main
