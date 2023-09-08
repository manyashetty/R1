import React from 'react';
import './AboutUs.css'; // Import your CSS file

const Aboutus = () => {
  return (
    <div className="about-us">
      <h1 className='abt'>About Us</h1>
      <p className='pabt'>
        Welcome to RecipeMaster, your ultimate destination for culinary inspiration.
        Our passion for food has driven us to create a platform where cooking enthusiasts,
        both novice and experienced, can explore, create, and share delightful recipes.
      </p>
      <p className='pabt'>
        At RecipeMaster, we believe that cooking is not just a necessity but an art form.
        Our mission is to empower you with the knowledge, creativity, and tools to craft
        exceptional dishes that tantalize taste buds and bring joy to your kitchen.
      </p>
      <p className='pabt'>
        Whether you're looking for quick weeknight dinners, gourmet treats, or dietary-specific recipes,
        our extensive collection has you covered. Join our community of food lovers, experiment with
        new flavors, and embark on a culinary journey like never before.
      </p>
      <p className='pabt'>
        Thank you for choosing RecipeMaster as your culinary companion. Let's cook up something
        extraordinary together!
      </p>

      <div>
        <h1 className='team'>The Recipe Master Team</h1>
        <div className="mem">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div class="card">
                  <img src={require('../Images/per1.jpg')} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">Vibha</h6>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card">
                  <img src={require('../Images/per3.jpg')} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">Shrilatha</h6>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card">
                  <img src={require('../Images/per4.jpg')} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">Manya</h6>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div class="card">
                  <img src={require('../Images/per5.jpg')} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6 class="card-title">Chandrika</h6>
                    <a href="#" class="btn btn-primary">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Aboutus;