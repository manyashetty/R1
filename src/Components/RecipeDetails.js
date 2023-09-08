
import React from 'react';
import './Recipe.css'; 
import { Link } from 'react-router-dom';
const RecipeDetails = () => {
  return (
 <div className="recipe-details">
       <h1 className="recipe-title">
        Gobi Manchurian Details
        </h1>
    <div className="section">
      <h2 className="section-title">Information</h2>
      <p className="section-text">
        In Hindi ‘Gobi’ means Cauliflower. ‘Manchurian’ refers to the Manchurian sauce which is made with sautéed spring onions (scallions), capsicum (bell pepper), green chillies, ginger, and garlic in a mix of soy sauce, tomato ketchup, and chilli sauce.
      </p>
    </div>
    <div className='image-gallery'>
    <img  src="https://www.indianveggiedelight.com/wp-content/uploads/2021/07/gobi-manchurian-1.jpg"
                    alt="loading..."
                    height="250px"
                    width="300px"
                    />
    </div>
    <div className="section">
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredient-list">
        <li>Cauliflower</li>
        <li>Spring Onions</li>
        <li>Capsicum</li>
        <li>Green Chillies</li>
        <li>Ginger</li>
        <li>Garlic</li>
        <li>Soy sauce</li>
        <li>Tomato ketchup</li>
        <li>Chilli sauce</li>
        <li>Cornstarch (for batter)</li>
        <li>All-purpose flour (maida, for batter)</li>
        <li>Salt, to taste</li>
        <li>Oil, for frying and sautéing</li>
        <li>Water</li>
      </ul>
    </div>

    <div className="section">
      <h2 className="section-title">Steps to Make</h2>
      <ol className="step-list">
        <li>Step 1: Prepare the cauliflower and other ingredients.</li>
        <li>Step 2: Prepare the Batter</li>
        <li>Step 3: Dip each cauliflower floret into the batter, ensuring it's well-coated.</li>
        <li>Step 4: Fry the Cauliflower until they turn golden brown and crispy</li>
        <li>Step 5: Sauté spring onions, capsicum, green chillies, ginger, and garlic.</li>
        <li>Step 6: In a small bowl, mix soy sauce, tomato ketchup, and chilli sauce according to your preferred taste and spice level.</li>
        <li>Step 7: Pour the sauce mixture into the pan with the sautéed vegetables. Stir well to combine and let it cook for a couple of minutes.</li>
        <li>Step 8: Add the fried cauliflower florets to the pan and toss them in the sauce until they are evenly coated. </li>
        <li>Step 9: Garnish your Gobi Manchurian with freshly chopped spring onion greens.</li>
      </ol>
    </div>
    <br></br>
    <div className="section">
        <ol className="conclusion">
        <h6>Serve it hot as a delicious appetizer or side dish.
        Enjoy your homemade Gobi Manchurian! Adjust the level of spiciness by adding more or less 
        chilli sauce according to your taste.</h6>
        </ol>
        <ol className='video'>
          <p>Refer Video:
              <Link to="https://www.youtube.com/watch?v=F6Czd-2dwN0">Click Here</Link>
          </p>
        </ol>
    </div>
 </div>
 
);
};

export default RecipeDetails;


