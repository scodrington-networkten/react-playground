import IngredientList from "@components/IngredientList.jsx";
import IngredientPicker from "@components/IngredientPicker.jsx";
import {useState} from "react";

const IngredientsSection = () => {

    //holds all currently selected ingredients
    let [ingredients, setIngredients] = useState(["apple", "Banana"]);

    //called by IngredientPicker when submitting the form, to select a new ingredient
    function handleAddItem (newItem){
        console.log("The value passed was" + newItem);
        setIngredients([...ingredients, newItem]);
    }

    return (
        <>
            <div className="ingredients-section">
                <IngredientPicker onAddItem={handleAddItem}/>
                <IngredientList data={{ingredients: ingredients}}/>
            </div>
        </>
    )
}
export default IngredientsSection
