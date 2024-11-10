import React from 'react';
import { NavLink } from 'react-router-dom';

function Product(curelm) {
    const { _id, name, image, price, category } = curelm;
    return (

        <NavLink to={`/singleProduct/${_id}`}>
            {/* <div class="card" style="width: 18rem;">
                <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}
        </NavLink>

    );
}

export default Product;