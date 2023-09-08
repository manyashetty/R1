
import React from 'react';
import './Recipe.css'; 
import { Link } from 'react-router-dom';
const RecipeDetails4 = () => {
  return (
 <div className="recipe-details">
       <h1 className="recipe-title">
        Paneer Ghee Roast Details
        </h1>
    <div className="section">
      <h2 className="section-title">Information</h2>
      <p className="section-text">
      Egg curry is a flavorful and popular dish in many South Asian and Indian cuisines.
        It consists of hard-boiled eggs cooked in a rich and aromatic gravy made from a variety of spices, tomatoes, onions,
         and sometimes coconut milk or yogurt. 
      </p>
    </div>
    <div className='image-gallery'>
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSKdI_yP_rlG0Ih4cHuRAlVSk8e1LTsSZEw&usqp=CAU"
                    alt="loading..."
                    height="250px"
                    width="300px"
                    />
    </div>
    <div className="section">
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredient-list">
        <li>Paneer</li>
        <li>Red Chili Powder</li>
        <li>Turmeric Powder</li>
        <li>Cumin Powder:</li>
        <li>Coriander Powder</li>
        <li>Ghee</li>
        <li>Grated Coconut</li>
        <li>Tamarind Paste</li>
        <li>Garlic Cloves </li>
        <li>Curry Leaves</li>
        <li>Fenugreek Seeds</li>
        <li>Cumin Seeds</li>
      </ul>
    </div>

    <div className="section">
      <h2 className="section-title">Steps to Make</h2>
      <ol className="step-list">
        <li>Step 1: In a bowl, mix 1 tbsp red chili powder, 1/2 tsp turmeric powder, 1 tsp cumin powder, 1 tsp coriander powder, salt to taste, and 1 tbsp lemon juice</li>
        <li>Step 2: oast on low flame until the spices turn aromatic.further, add 4 clove garlic and saute slightly without burning.</li>
        <li>Step 3: transfer the spices into a blender and allow to cool completely. Also add 2 tbsp tamarind extract and ¼ cup water.Blend to smooth paste. masala paste is ready, keep aside..</li>
        <li>Step 4: in another pan heat 1 tsp ghee and roast 15 cubes paneer.Roast on low to medium flame or until it turns golden brown. keep aside.In a large kadai heat 2 tbsp ghee and add ½ onion and few curry leaves. </li>
        <li>Step 5: Saute until onions shrink slightly.Furher add ¼ tsp turmeric and saute well.Now add in the prepared masala paste and cook well.</li>
        <li>Step 6: saute and cook well for at least 10-15 minutes or until ghee separates.add in 2 tbsp curd and saute well until well combined.furthermore, add ½ tsp salt and ½ tsp jaggery. mix well.</li>
        <li>Step 7:now add in roasted paneer and cook for a minute.finally, garnish with few curry leaves and enjoy paneer ghee roast with roti or dosa.</li>
      </ol>
    </div>
    <br></br>
    <div className="section">
        <ol className="conclusion">
        <h6>Adjust the quantity of red chilies and spices to suit your taste preferences, making it as mild or as spicy as you like. Enjoy this delicious South Indian dish!</h6>
        </ol>
        <ol className='video'>
          <p>Refer Video:
              <Link to="https://www.youtube.com/watch?v=kscC5MVhB1E">Click Here</Link>
          </p>
        </ol>
    </div>
 </div>
);
};

export default RecipeDetails4;