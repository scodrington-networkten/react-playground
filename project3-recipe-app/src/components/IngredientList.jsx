import Ingredient from "@components/Ingredient.jsx";
import {useState} from "react";
import ingredientList from "@components/IngredientList.jsx";

const IngredientList = ({ingredients, onRemoveItem}) => {

    //extract data about the ingredients
    let components = ingredients.map((item, index) => {
        return <li>
            <Ingredient data={{name: item}} key={index} onRemoveItem={onRemoveItem}/>
        </li>
    });

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
