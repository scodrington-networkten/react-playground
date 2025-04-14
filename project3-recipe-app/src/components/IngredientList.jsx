import Ingredient from "@components/Ingredient.jsx";
import {useState} from "react";
import ingredientList from "@components/IngredientList.jsx";

const IngredientList = (props) => {

    //extract data about the ingredients
    const {
        ingredients
    } = props.data;

    let components = ingredients.map((item, index) => {
        return <li><Ingredient data={{name: item}} key={index}/></li>
    });

    const [myValue, setMyValue] = useState("hello");

    //setMyValue("New Value")
    return (
        <>
            <div className="ingredient-list">
                <h2>Here are all our ingredients</h2>
                <ul>
                    {components}
                </ul>

            </div>
        </>
    )
}
export default IngredientList
