import '@css/ingredient-picker.scss';
import {useState} from "react";

const IngredientPicker = ({onAddItem}) => {

    //state of the input value
    const [inputValue, setInputValue] = useState("");

    //action for form, provided with formdata
    function submit(formData) {
        let value = formData.get("ingredient_picker");
        onAddItem(value);
        setInputValue("");
    }

    return (
        <>
            <form className="ingredient-form" action={submit}>
                <div className="ingredient-picker">
                    <input
                        placeholder="Search for ingredient"
                        type="text"
                        name="ingredient_picker"
                        id="ingredient_picker"
                        aria-label="Search for ingredient"
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button>+ Add Ingredient</button>
                </div>
            </form>
        </>
    )
}

export default IngredientPicker;
