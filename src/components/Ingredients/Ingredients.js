import axios from "axios";
import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredientList, setIngredientList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://burger-react-app-3abe8-default-rtdb.firebaseio.com/ing.json"
      )
      .then((resp) => {
        const loadedIngredients = [];
        // console.log(resp);

        for (const key in resp.data) {
          loadedIngredients.push({
            id: key,
            title: resp.data[key].title,
            amount: resp.data[key].amount,
          });
        }
        setIngredientList(loadedIngredients);
      });
  }, []);

  const addIngredientHandler = (ingredient) => {
    axios
      .post(
        "https://burger-react-app-3abe8-default-rtdb.firebaseio.com/ing.json",
        ingredient
      )
      .then((resp) => {
        // console.log(resp.data.name);
        setIngredientList((prevIngredients) => [
          ...prevIngredients,
          { id: resp.data.name, ...ingredient },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
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
