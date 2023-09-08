import './Home.css'
import './Recipe.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav,Navbar, Dropdown} from 'react-bootstrap'; 
// import { Link } from 'react-router-dom'
const Navbar1 = () => {
    return (
    <Navbar className="shadow">
        {/* <Navbar.Toggle aria-controls="navbarNav" /> */}
            <Navbar.Collapse id="navbarNav">
        <div className='h_full'>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg back">
                    <div className='navbar-brand head'id="Recipe" >
                        <img src={require('../Images/chef.png')} alt='Logo' width={60} height={70} className='img-responsive me-3'></img>
                        Recipe Master
                    </div>
                    <div className="container">
                        <ul className="navbar-nav non-head">
                            <li className='nav-item'>
                                <a className='nav-link' href='/' id='text'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Plan' id='text'>Meal Plan</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/Recipe' to="/Recipe" id='text'>Recipes</a>
                            </li>
                            
                            <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} id="recipes-dropdown" className="nav-link">
                 More Options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href='/create-recipe' to="/create-recipe">Create-Recipe</Dropdown.Item>
                  <Dropdown.Item href='/saved-recipe' to="/saved-recipe">Saved Recipes</Dropdown.Item>
                  <Dropdown.Item href='/Aboutus'>About Us</Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
                        </ul>
                        <div className="nav navbar-nav navbar-right">
                            <a href='Login'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Login</button></a>
                       
                            <a href='SignUp'><button type="button" className="btn btn-dark ms-auto px-4 rounded-pill">Sign-up</button></a>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <div className="input-group">
                <input type="search" className="form-control rounded me-3 bs" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn rounded search">Search</button>
            </div> */}
        </div>
       
            </Navbar.Collapse>
      
    </Navbar>
    
    );
}

export default Navbar1;