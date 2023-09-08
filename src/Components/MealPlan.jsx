import './MealPlan.css'
import { Carousel } from 'react-bootstrap';
const MealPlan = () => {
    return (
        <div className='bg-meal'>
            <div className="meal">
                <h1 className="mealhead mb-4">Meal Plans</h1>
                <p className='mealpara mb-4'>Our delicious meal plans are designed by registered dietitians and food experts to help you lose weight, eat more fiber, go vegan and more. </p>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>WEIGHT-LOSS MEAL PLANS</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>MEAL PLANS FOR DIABETES</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>VEGETARIAN MEAL PLANS</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>PREGNANCY MEAL PLANS</h5></a>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>LOW-CARB MEAL PLANS</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>VEGAN MEAL PLANS</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>DAIRY-FREE MEAL PLANS</h5></a>
                        </div>
                        <div className="col-lg-3">
                            <a href='/' className='anc'><h5>HIGH-FIBER MEAL PLANS</h5></a>
                        </div>
                    </div>
                </div>
                <Carousel className='cara'>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={require('../Images/MealPlan1.webp')}
                            alt="First slide"
                            style={{ maxWidth: '100%', maxHeight: '60vh' }}
                        />
                        <Carousel.Caption>
                            <h5 id='textmeal'>...</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={require('../Images/MealPlan4.jpg')}
                            alt="Second slide"
                            style={{ maxWidth: '100%', maxHeight: '60vh' }}
                        />
                        <Carousel.Caption>
                            <h5 id='textmeal'>...</h5>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block "
                            src={require('../Images/MealPlan2.webp')}
                            alt="Third slide"
                            style={{ maxWidth: '100%', maxHeight: '60vh' }}
                        />
                        <Carousel.Caption>
                            <h5 id='textmeal'>...</h5>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default MealPlan;