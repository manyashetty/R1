import './Home.css';
import 'boxicons/css/boxicons.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Food7 from "../Images/Food7.jpg";
import Food9 from "../Images/Food9.jpg";
import Food10 from "../Images/Food10.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    < >

      <div id="price">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block "
              src={Food7}
              alt="First slide"
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            <Carousel.Caption>
              <h5 id='text'>"People who love to eat are always the best people." - Julia Child</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={Food9}
              alt="Second slide"
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            <Carousel.Caption>
              <h5 id='text'>"First we eat, then we do everything else." - M.F.K. Fisher</h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src={Food10}
              alt="Third slide"
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            <Carousel.Caption>
              <h5 id='text'>"Food is symbolic of love when words are inadequate." - Alan D. Wolfelt</h5>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* JUst Text as intro for website */}
        <br></br>
        <div class="container">
          <div class="card">
            <div class="simple">
              <h1>Recipes for Foodies</h1>
              <p>Are you passionate about cooking or simply in search of delightful culinary adventures?
                Look no further! We are thrilled to introduce "RecipeMaster," your all-in-one web application for
                becoming a culinary maestro right in the comfort of your kitchen.</p>
              <p>"RecipeMaster" is designed with one goal in mind: to elevate your cooking game to a whole new level.
                Whether you're a seasoned chef or a kitchen novice, our application provides you with a treasure trove
                of carefully curated recipes from around the globe. From mouthwatering appetizers to decadent desserts,
                our collection spans cuisines, skill levels, and dietary preferences.</p>
            </div>
          </div>
        </div>

        <section id="recipes" class="secPad">
          <div class="container"><h1>Popular</h1>
            <div class="row">
              {/* <!-- Recipe 1 --> */}
              <div class="col-md-4">
                <div class="recipe-card">
                  <div class="recipe-name">Gobi Manchurian</div>
                  <img src="https://www.spicypunch.com/wp-content/uploads/2022/10/Gobi-Manchurian.jpg"
                    alt="loading..."
                    height="150px"
                    width="250px"
                  />
                  <p>Gobi Manchurian is a popular Indian-Chinese fusion dish made with cauliflower
                    (gobi) florets that are deep-fried and then tossed in a flavorful Manchurian sauce</p>
                    <Link to="/gobi-manchurian-details" className="btn btn-secondary">
                        Read more
                    </Link>

                </div>
                <div class="box-icons">

                </div>
              </div>


              {/* <!-- Recipe 2 --> */}
              <div class="col-md-4">
                <div class="recipe-card">
                  <div class="recipe-name">Paneer Ghee Roast</div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSKdI_yP_rlG0Ih4cHuRAlVSk8e1LTsSZEw&usqp=CAU"
                    alt="loading..."
                    height="150px"
                    width="250px"
                  />
                  <p>Paneer Ghee Roast is a delicious and spicy South Indian dish made with paneer (Indian cottage cheese)
                    that's roasted in aromatic ghee (clarified butter) and a flavorful blend of spices.</p>
                    <Link to="/paneer-details" className="btn btn-secondary">
                           Read more
                    </Link>
                </div>
                <div class="box-icons">

                </div>
              </div>

              {/* <!-- Recipe 3 --> */}
              <div class="col-md-4">
                <div class="recipe-card">
                  <div class="recipe-name">Chicken kebab</div>
                  <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg "
                    alt="loading..."
                    height="150px"
                    width="250px"
                  />
                  <p>Chicken kebabs are a popular and delicious dish made from marinated chicken pieces skewered and grilled to perfection
                    There are various ways to make chicken kebabs</p>
                    <Link to="/chicken-kebab-details" className="btn btn-secondary">
                           Read more
                    </Link>
                </div>
                <div class="box-icons">

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!--Quote--> */}
        <section id="quote" class="bg-parlex">
          <div class="parlex-back">
            <div class="container secPad text-center">
              <h5>If I asked people what they wanted, they would have said ‘Faster Horses’.</h5><h6>-Henry Ford</h6>
            </div>
            {/* <!--/.container--> */}
          </div>
        </section>

        {/* <!-- Footer --> */}

        <footer id="footer">

          {/* <!-- Icons --> */}
          <ul class="actions">
            <li><a href="https://twitter.com/" ><i class='bx bxl-twitter bx-lg'></i></a></li>
            <li><a href="https://www.facebook.com/"><i class='bx bxl-facebook bx-lg' ></i></a></li>
            <li><a href="https://www.google.com/" ><i class='bx bxl-google-plus bx-lg'></i></a></li>
            <li><a href="https://www.pinterest.com/" ><i class='bx bxl-pinterest bx-lg'></i></a></li>
            <li><a href="https://www.instagram.com/"><i class='bx bxl-instagram-alt bx-lg' ></i></a></li>
            <li class="menu">&copy; Untitled | Design: <a href="http://Recipie.in">Recipie-guide</a></li>
          </ul>

        </footer>
      </div>
    </>
  );
}

export default Home;