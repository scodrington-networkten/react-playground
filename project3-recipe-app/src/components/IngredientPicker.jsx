import '@css/ingredient-picker.scss';

const IngredientPicker = () => {
    return (
        <>
            <form>
                <div className="ingredient-picker">
                    <input placeholder="Search for ingredient" type="text" name="ingredient_picker"
                           id="ingredient_picker"/>
                    <input type="button" value="+ Add Ingredient"/>
                </div>
            </form>
        </>
    )
}

export default IngredientPicker;
