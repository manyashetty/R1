
import React from 'react';
import './Recipe.css'; 
import { Link } from 'react-router-dom';
const RecipeDetails2 = () => {
  return (
 <div className="recipe-details">
       <h1 className="recipe-title">
        Chicken kebab Details
        </h1>
    <div className="section">
      <h2 className="section-title">Information</h2>
      <p className="section-text">
      Chicken kebab or chicken skewer, is a popular dish in many cuisines around the world,
       particularly in Middle Eastern, Mediterranean, and South Asian cuisine.It consists of small pieces of chicken 
        meat that are  marinated in a flavorful mixture of spices and yogurt.
      </p>
    </div>
    <div className='image-gallery'>
    <img  src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg"
                    alt="loading..."
                    height="250px"
                    width="300px"
                    />
    </div>
    <div className="section">
      <h2 className="section-title">Ingredients</h2>
      <ul className="ingredient-list">
        <li>Chicken</li>
        <li>Yogurt</li>
        <li>Spices</li>
        <li>Lemon Juice</li>
        <li>Ginger</li>
        <li>Garlic</li>
        <li>Olive Oil or Vegetable Oil</li>
        <li>Salt and Pepper</li>
        <li>Onions and Bell Peppers</li>
        <li>Fresh Herbs</li>
        <li>Yogurt-based Sauce</li>
        <li>Flatbreads or Pita</li>
        <li>Oil, for frying and sautéing</li>
      </ul>
    </div>

    <div className="section">
      <h2 className="section-title">Steps to Make</h2>
      <ol className="step-list">
        <li>Step 1: Prepare the Chicken i.e Cut boneless chicken into small cubes or strips</li>
        <li>Step 2: In a bowl, combine yogurt, minced garlic, grated ginger, paprika, cumin, coriander, 
            turmeric, cayenne pepper, lemon juice, olive oil, salt, pepper, and chopped fresh herbs.</li>
        <li>Step 3: Pour the marinade over the chicken</li>
        <li>Step 4: Grill: Preheat a grill to medium-high heat. Oil the grill grates to prevent sticking.
             Grill the chicken kebabs for about 10-15 minutes, turning occasionally, until they are cooked through with a nice char on the outside</li>
      </ol>
    </div>
    <br></br>
    <div className="section">
        <ol className="conclusion">
        <h6>Chicken kebabs are delicious and versatile, making them a great option
             for parties, picnics, or a flavorful family meal. Adjust the seasoning and ingredients 
             to suit your taste preferences. Enjoy your homemade chicken kebabs!</h6>
        </ol>
        <ol className='video'>
          <p>Refer Video:
              <Link to="https://www.youtube.com/watch?v=fIeCfffQ5IM">Click Here</Link>
          </p>
        </ol>
    </div>
 </div>
);
};

export default RecipeDetails2;


