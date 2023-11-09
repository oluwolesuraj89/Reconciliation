import React from 'react';
import { NavLink } from 'react-router-dom';
import classNamees from '../Nav/Nav.module.css';
import Logo from '../../Images/Logo.png';
import classes from '../Nav/Nav.module.css';

function Navigation() {
  return (
    <div className={classNamees.body}>
       <div className={classes.NavContainer}>
          <nav className={classes.Navbar}>
            {/* <div className="container-fluid" > */}
              <NavLink to={'/'} className="navbar-brand" href="#"><img src={Logo}/></NavLink>
              <div className={classes.MenuContainer}>
                <ul className={classes.navMenu}>
                  <li className="nav-item">
                    <NavLink to={'Landingpage'} className="nav-link active" aria-current="page" href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/AboutUs'} className="nav-link" href="#">AboutUs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/Product'} className="nav-link" href="#">product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={'/Pricings'} className="nav-link" >Pricing</NavLink>
                  </li>
                    <button type="button" className={classes.topNavButton}  ><NavLink to={'/SignUp'} >Sign Up</NavLink></button>          
                </ul>
              </div>
              <button className={classes.navbarToggler} type="button">
                <i className="fas fa-bars"></i>
              </button>
            {/* </div> */}
          </nav>
          </div>
    </div>
  )
}

export default Navigation