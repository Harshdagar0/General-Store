import React from 'react';
import { NavLink } from 'react-router-dom';
function Hero({Name}) {
    return (
        <div className='container-sm'>
            <div className='row' style={{marginTop:"5rem",margin:"2rem"}}>
                <div className=' col-lg-6'>
                    <p>Welcome to </p>
                    <h1 style={{color:"#1004B6"}}>{Name}</h1>
                    <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online.
                         It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of
                          the product shelves, sales staff, and cash register of a physical shop.</p>
                          <NavLink to="/" className="btn  " style={{backgroundColor:"#1004B6", color:"white"}}>Shop Now</NavLink>
                </div>
                <div className='col col-xl-6 mt-2'>
                    <img className='img-fluid' src='./images/hero.jpg' alt='hero image' height="300px"></img>
                </div>
            </div>
        </div>
    );
}

export default Hero;