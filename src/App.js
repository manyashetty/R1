import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Login from "./Components/Login";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Recipe from './Components/Recipe';
import CreateRecipe from "./Components/create-recipe";
import SavedRecipe from "./Components/saved-recipes";
import Search from './Components/Search';
import RecipeDetails from './Components/RecipeDetails';
import RecipeDetails2 from './Components/RecipeDetails2';
import RecipeDetails3 from './Components/RecipeDetails3';
import RecipeDetails4 from './Components/RecipeDetails4';
import WeightLoss from './Components/mealplans/WeightLoss';
import Diabetes from './Components/mealplans/Diabetes';

import Aboutus from './Components/Aboutus';
import MealPlan from './Components/MealPlan';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path= "/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/diabetes" element={<Diabetes/>}/>
          <Route path="/WeightLoss" element={<WeightLoss/>}/>
       
          <Route path="/gobi-manchurian-details" element={<RecipeDetails />} />
          <Route path="/chicken-kebab-details" element={<RecipeDetails2 />} />
          <Route path="/egg-curry-details" element={<RecipeDetails3 />} />
          <Route path="/paneer-details" element={<RecipeDetails4 />} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Plan" element={<MealPlan/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




