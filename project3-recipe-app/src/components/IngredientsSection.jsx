import IngredientList from "@components/IngredientList.jsx";
import IngredientPicker from "@components/IngredientPicker.jsx";
import {useState} from "react";

const IngredientsSection = () => {

    //holds all currently selected ingredients
    const [ingredients, setIngredients] = useState(["apple", "Banana"]);

    //called by IngredientPicker when submitting the form, to select a new ingredient
    function handleAddItem (newItem){
        setIngredients(function(prevIngredients ){
            return [...prevIngredients, newItem];
        });
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
