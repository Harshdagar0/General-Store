import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

const Cart = () => {
  const location = useLocation();
  let data = location.state;
  let alldata = [];
  alldata.push(data);
  let [persondata, setpersondata] = useState([])
  let logindata = localStorage.getItem("login");
   logindata = JSON.parse(logindata);
    useEffect(() => {
    if(logindata){
      const fetchdata = async () => {
        try {
          const res = await fetch('http://localhost:3003/send',{
            method: "POST",
            body: JSON.stringify({logindata} ),
            headers:{
              'content-Type':'application/json'
            }
          });
          setpersondata(await res.json());
        } catch (error) {
          console.log(error);
        };
      };
      fetchdata();
    }
   
  }, [persondata]);
  let INDIA = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'INR',
  });
  const Delete = async (e) => {
    e.preventDefault();
    let id = e.target.value;
    const res = await fetch("http://localhost:3003/delete", {
      method: "POST",
      body: JSON.stringify( {id:id}),
      headers:{
        'content-Type':'application/json'
      }
    });
  };
  return (
    <>
    <div className='container text-center' style={{ marginTop: "100px" }}>
      <h1>MY CART <i class="fa-solid fa-cart-shopping"></i></h1>
    </div>
      <NavLink to="/products" className="container ms-3  ">
      <button  className='mt-3' style={{backgroundColor:"#1004B6",color:"white",borderRadius:"5px"}}>Continue Shopping</button>
      </NavLink>
      <h3 className='d-flex justify-content-end me-5'>Welcome {logindata.fullname}</h3>

      <div className='container d-flex justify-content-center row' style={{ marginTop: "10px" }}>
        {
          persondata.map(elm => {
            return (
              <div className="border ms-2 mt-4" style={{ width: "18rem" }}>
                <img className="card-img-top" src={elm.image} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 class="card-title">{elm.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><span className='' style={{ fontWeight: "500" }}>Color : </span><span style={{ backgroundColor: `${elm.color}`, height: "10px", border: "1px soild black", borderRadius: "50%", color: `${elm.color}` }}>0o</span></li>
                  <li class="list-group-item"><span className='' style={{ fontWeight: "500" }}>Price : </span> {INDIA.format(`${elm.price}`)} </li>
                  <li class="list-group-item"><span className='' style={{ fontWeight: "500" }}>Quantity : </span> {elm.quantiy}</li>
                </ul>
                <div class="card-body">
                    <button onClick={Delete} value={elm._id} class="btn btn-danger">Delete</button>
                           {/* <a href="#" class="card-link">Another link</a> */}
                  </div>
              </div>
            )
          })
        }
      </div>
    </>

  )
};
export default Cart;
