import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Item(props) {
  let filtered = props.data;
   let categoryy = props.categoryitem;
  console.log(categoryy);
   
  let INDIA = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });
  let data=[];
  if (categoryy==="All") {
     data=filtered;
  }else(

    data =filtered.filter(obj=>obj.category===categoryy)
  )

 
  return ( 
        <>
          {data.map(element => {
              return (
                <NavLink className="mt-3 col-6 col-lg-4 " to={`/singleProduct/${element._id}`} key={element._id} style={{ textDecoration: "none", color: "black", }} >
                  <div class="card">
                    <img src={element.image} class=" card-img-top" alt="image" style={{ height: "10rem" }} />
                    <div class="card-body ">
                      <span className= ' row d-flex justify-content-around'>
                        <span class=" col-xl-6">{element.name}</span>
                        <span class=" col-xl-6" style={{ marginLeft: "", color: "blue" }}>{INDIA.format(`${element.price}`)}
                        </span>
                      </span>
                    </div>
                  </div>
                </NavLink>
              )
            })
            }
        </>
     );
}

export default Item;