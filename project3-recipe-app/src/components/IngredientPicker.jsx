import '@css/ingredient-picker.scss';

const IngredientPicker = () => {

    function handleClick(e) {
        console.log("Mouse Clicked!");
    }

    function handleMouseEntered() {
        console.log("Mouse entered!");
    }

    return (
        <>
            <form className="ingredient-form">
                <div className="ingredient-picker">
                    <input placeholder="Search for ingredient" type="text" name="ingredient_picker"
                           id="ingredient_picker" aria-label="Search for ingredient"/>
                    <button onClick={handleClick} onMouseEnter={handleMouseEntered}>+ Add Ingredient</button>
                </div>
            </form>
        </>
    )
}

export default IngredientPicker;
