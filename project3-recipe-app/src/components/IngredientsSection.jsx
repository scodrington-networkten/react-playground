import IngredientList from "@components/IngredientList.jsx";
import IngredientPicker from "@components/IngredientPicker.jsx";
import {useState} from "react";

const IngredientsSection = () => {

    let [ingredients, setIngredients] = useState(["apple", "Banana"]);

   // console.log(ingredients);

    function handleAddItem (newItem){
        console.log("The value passed was" + newItem);
    }

    return (
        <>
            <div className="ingredients-section">
                <IngredientPicker onAddItem={handleAddItem}/>
                <IngredientList data={{ingredients: ["apple", "melon"]}}/>
            </div>
        </>
    )
}
export default IngredientsSection
