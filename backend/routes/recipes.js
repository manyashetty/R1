import express from "express";
// import mongoose from "mongoose";
import { RecipesModel } from "../models/Recipes.js";
// import { UserModel } from "../models/Users.js";
// import { verifyToken } from "./user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await RecipesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new recipe

router.post('/create', async (req, res) => {
  try {
    const {name,ingredients,instructions,imageUrl,cookingTime,isVeg} = req.body;

    // Create a new Food document
    const newFood = new RecipesModel({name,ingredients,instructions,imageUrl,cookingTime,isVeg });

    // Save the document to the database
    await newFood.save();

    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Get a recipe by ID
router.get("/get", async (req, res) => {
  try {
    const result = await RecipesModel.find();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({error:"Internal server failed"});
  }
});



// Get saved recipes
// router.get("/savedRecipes/:userId", async (req, res) => {
//   try {
//     const user = await UserModel.findById(req.params.userId);
//     const savedRecipes = await RecipesModel.find({
//       _id: { $in: user.savedRecipes },
//     });

//     console.log(savedRecipes);
//     res.status(201).json({ savedRecipes });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });









router.delete("/delete/:name", async (req, res) => {
  try {
    let recipe = await RecipesModel.findOneAndDelete(req.params.name) //new true means, if new contact comes it will be added
    res.json({ "Success": "Receipe has been deleted" });
  
    if (!recipe) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully', recipe });
  } catch (error) {  //catch errors
    console.error(error.message)
    res.status(500).send("Internal Server Error1");
  }
});

export { router as recipesRouter };

