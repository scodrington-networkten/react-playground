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


    const getContent = () => {

        if(ingredients.length > 0){
            return <>
                <h2>Here are all our ingredient</h2>
                <ul>
                    {components}
                </ul>
            </>
        }else{
            return <>
                <h2>Enter ingredients above to get started</h2>
            </>
        }

    };

    return (
        <>
            <div className="ingredient-list">
                {getContent()}
            </div>
        </>
    )
}
export default IngredientList
