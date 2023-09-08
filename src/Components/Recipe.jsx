import './Recipe.css';
import React from "react";
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
const Recipe = () => {
    return (
        < >
        <div class="main">
            <h1>Explore our Recipes</h1>
        </div>
        <dic class="container">
        <div class="row">
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div class="col-md-3">
                <div class="card">
                    <img  src="https://www.spicypunch.com/wp-content/uploads/2022/10/Gobi-Manchurian.jpg"
                    alt="loading..."
                    height="250px"
                    width="350px"
                    />
                    <div class="card-body">
                        <h3 class="card-header">Gobi manchurian</h3>
                        <p class="card-text"></p>
                        <p class="card-text">In Hindi ‘Gobi’ means Cauliflower. ‘Manchurian’ refers to the Manchurian sauce 
                        which is made with sautéed spring onions (scallions), capsicum (bell pepper), 
                        green chillies, ginger and garlic in a mix of soy sauce, tomato ketchup and chilli sauce</p> <br></br>
                        <Link to="/gobi-manchurian-details" className="btn btn-secondary">
                        Read more
                        </Link>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------ */}
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg "
                    alt="loading..."
                    height="250px"
                    width="350px"
                    />
                    <div class="card-body">
                        <h3 class="card-header">Chicken kebab</h3>
                        <p class="card-text"></p>
                          <p class="card-text">Chicken kebab or chicken skewer, is a popular dish in many cuisines around the world,
                           particularly in Middle Eastern, Mediterranean, and South Asian cuisine.It consists of small pieces of chicken 
                           meat that are  marinated in a flavorful mixture of spices and yogurt.
                           </p><br></br>
                           <Link to="/chicken-kebab-details" className="btn btn-secondary">
                           Read more
                           </Link>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------ */}
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375.jpg" 
                    alt="loading..."
                    height="250px"
                    width="350px"
                    />
                    <div class="card-body">
                        <h3 class="card-header">Egg curry</h3>
                        <p class="card-text"></p>
                          <p class="card-text">Egg curry is a flavorful and comforting dish and popular dish in many South Asian and Indian cuisines.
                           It consists of hard-boiled eggs cooked in a rich and aromatic gravy made from a variety of spices, tomatoes, onions,
                            and sometimes coconut milk or yogurt. 
                           </p><br></br>
                           <Link to="/egg-curry-details" className="btn btn-secondary">
                           Read more
                           </Link>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------------------------------------ */}
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSKdI_yP_rlG0Ih4cHuRAlVSk8e1LTsSZEw&usqp=CAU"
                    alt="loading..."
                    height="250px"
                    width="350px"
                    />
                    <div class="card-body">
                        <h3 class="card-header">Paneer Ghee Roast</h3>
                        <p class="card-text"></p>
                          <p class="card-text">Paneer ghee roast is a popular and flavorful dish in Indian cuisine, particularly in the
                           South Indian region of Karnataka. It features paneer marinated in a spicy and tangy masala mixture,
                            which is then roasted in ghee until it's well-browned and aromatic. 
                           </p><br></br>
                           <Link to="/paneer-details" className="btn btn-secondary">
                           Read more
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
    </dic>
    </>
        );
}

export default Recipe;