import express from "express";
import { RecipesModel } from "./models/Recipes.js";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

//for updating
app.put('/update/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { instruction, ingredients, imageUrl, cookingTime,isVeg } = req.body;

    // Find the item with the provided food name and update its fields
    const updatedItem = await RecipesModel.findOneAndUpdate(
      { food: name },
      { instruction, ingredients, imageUrl, cookingTime,isVeg },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item updated successfully', updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




mongoose.connect(
  "mongodb+srv://manu12shetty:Deyc1DXNoNtbF98f@cluster0.osr1gof.mongodb.net/price",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=>{
  console.log('Connected to DB');
})
.catch((err)=> {
  console.log(err);
});

app.listen(3001, () => console.log("Server started!!!"));



