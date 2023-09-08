
import React from 'react';
import './Recipe.css';
import { Link } from 'react-router-dom';
const RecipeDetails3 = () => {
  return (
 <div className="recipe-details">
       <h1 className="recipe-title">
        Egg Curry Details
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
    <img  src="https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg"
                    alt="loading..."
                    height="250px"
                    width="300px"
                    />
    </div>
    <div className="section">
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredient-list">
        <li>Flour</li>
        <li>Yogurt</li>
        <li> ginger garlic paste</li>
        <li>Eggs</li>
        <li>Salt</li>
        <li>Black pepper</li>
        <li>Soy sauce</li>
        <li>Bell Peppers</li>
        <li>Onions </li>
        <li>Fresh Herbs</li>
        <li>Green chillies</li>
        <li>Coriander leaves</li>
      </ul>
    </div>

    <div className="section">
      <h2 className="section-title">Steps to Make</h2>
      <ol className="step-list">
        <li>Step 1: Prepare the batter by adding refined flour, cornflour, ginger garlic paste, and salt and pepper to a bowl</li>
        <li>Step 2: Add enough water to make a thick paste.Boil the eggs for 8 to 10 minutes.</li>
        <li>Step 3: Peel & cut each egg into quarters.Dip the pieces in the batter and set them aside.</li>
        <li>Step 4: Heat oil in a pan/wok.Deep fry the batter-coated eggs carefully until they turn golden brown.Remove the eggs onto a plate and set them aside.</li>
        <li>Step 5: Add sliced bell pepper, onions, green chilies as well as ginger-garlic paste along with the seasoning and stir fry it for about 5 minutes.Add the sauce ingredients to the stir fry and mix properly. </li>
        <li>Step 6: Add the deep-fried eggs into the mixture and mix well until all the slices are well coated. Take care to keep the fried egg slices intact.</li>
        <li>Step 7: Keep it covered for 5 to 10 minutes.Garnish it with fresh coriander leaves and serve it hot with steaming noodles or fried rice.</li>
      </ol>
    </div>
    <br></br>
    <div className="section">
        <ol className="conclusion">
        <h6>Egg curry can be customized to your preferred level of spiciness and flavor. 
            Adjust the spices and seasonings to suit your taste. It's a hearty and satisfying dish that's enjoyed in many parts of the world.</h6>
        </ol>
        <ol className='video'>
          <p>Refer Video:
              <Link to="https://www.youtube.com/watch?v=0bs7u1CLKy8">Click Here</Link>
          </p>
        </ol>
    </div>
 </div>
);
};

export default RecipeDetails3;
