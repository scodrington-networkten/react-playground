import '@css/ingredient-picker.scss';
const IngredientPicker = () => {
    return (
        <>
            <div className="ingredient-picker">
                <input placeholder="search for ingredient" text="text" name="ingredient_picker" id="ingredient_picker"/>
                <button>+ Add Ingredient</button>
            </div>
        </>
    )
}

export default IngredientPicker;
