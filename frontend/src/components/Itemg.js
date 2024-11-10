import React from 'react';
import { NavLink } from 'react-router-dom';
function Itemg(props) {
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
                <NavLink className="mt-3 border col-10" to={`/singleProduct/${element._id}`} key={element._id} style={{ textDecoration: "none", color: "black", }} >
                  <div class=" row ">
                    <div className='col-4'>
                    <img src={element.image} class=" card-img-top" alt="image" style={{ height: "10rem",width:"15rem" }} />

                    </div>
                    <div class="col-xl-8">
                      <span className= 'd-flex flex-column'>
                        <span class="fs-5">{element.name}</span>
                        <span class=" " >{INDIA.format(`${element.price}`)}</span>
                        <span cla>{`${element.description}`.slice(0,149)}</span>
                        <button className='btn'>Read more</button>
                       
                      </span>
                    </div>
                  </div>
                </NavLink>
              )
            })}
            </>
     );
}

export default Itemg;