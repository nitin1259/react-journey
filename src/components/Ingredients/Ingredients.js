import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngredientList((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient },
    ]);
  };

  const deleteIngredientHandler = (ing_id) => {
    setIngredientList((prevIngredients) =>
      prevIngredients.filter((ing) => ing.id !== ing_id)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredients={addIngredientHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={ingredientList}
          onRemoveItem={deleteIngredientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
