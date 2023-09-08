import React, { useState } from "react";
import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./create_recipe.css";

 const CreateRecipe = () => {
  // const userID = useGetUserID();
  
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    isVeg:true,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setRecipe({ ...recipe, [name]: value });   
    if (name === 'isVeg') {
      setRecipe({
        ...recipe,
        [name]: value === 'true', // Convert the string to a boolean
      });
    } else {
      setRecipe({
        ...recipe,
        [name]: value,
      });
    }
  };
  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:3001/recipes/create`,recipe);
        setRecipe({
          imageUrl: '',
          recipe: '',
          food: '',
          isVeg: true, // Reset the isVeg property to 'true'
        });
  
        console.log('New item added successfully');
      alert("Recipe Created");
      navigate("/saved-recipe");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h2 >Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
          <div>
          <label htmlFor="isVeg" className="form-label">
            Veg or Non-Veg
          </label>
          <select
            className="form-select"
            id="isVeg"
            name="isVeg"
            value={recipe.isVeg.toString()} // Convert boolean to string
            onChange={handleChange}
          >
            <option value="true">Veg</option>
            <option value="false">Non-Veg</option>
          </select>
       </div>
        {/* <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        ></textarea> */}
        <div>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        </div>
       <button
  type="button"
  onClick={handleAddIngredient}
  style={{
    backgroundColor: 'black', // Dark background color
    color: '#fff', // White text color
    padding: '10px 20px', // Adjust padding as needed
    border: 'none', // Remove the default button border
    cursor: 'pointer', // Add a pointer cursor on hover
    borderRadius: '5px', // Add rounded corners if desired
  }}
>
  Add Ingredient
</button>

        <label htmlFor="instructions">Steps</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
export default CreateRecipe;