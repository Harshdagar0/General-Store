import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const logindeails = JSON.parse(localStorage.getItem("login"));
  let [filtered, setfiltered] = useState([]);
  let fData = [];
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('https://general-store-back.onrender.com');
        const data = await res.json();
        let i = 0;
        for (i = 0; i < data.length; i++) {
          if (data[i]._id === id) {
            fData = [...fData, data[i]];
          }
        }
        setfiltered(fData);

      } catch (error) {
        console.log(error);
      };
    };
    fetchdata();
  }, []);
  let INDIA = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  });

  let [img, setimg] = useState();
  let [proCol, setproCol] = useState();
  let [proQu, setproQu] = useState(1);
  let nevegate = useNavigate();

const send = async (e) => {
  e.preventDefault();
  if(logindeails){
  nevegate("/cart");
  const email = logindeails.email;

  const res = await fetch("http://localhost:3003/data", {
    method: "POST",
    body: JSON.stringify({color:proCol,qu:proQu,name:filtered[0].name,price:filtered[0].price,image:filtered[0].image,email:email}),
    headers:{
      'content-Type':'application/json'
    }
  });}
  else{
    nevegate("/login");
  }
};
 
return (
  <>
    <div className=' bg-light ps-5' style={{ marginTop: "50px" }}>
      <div className='col'>
        <NavLink to="/products" style={{ textDecoration: "none" }}>Products</NavLink> /  {
          filtered.map(elm => {
            return (
              <span key={elm._id}>{elm.name}</span>
            )
          })
        }
      </div>
    </div>
    <div className='container mt-5'>
      {
        filtered.map((elm) => {
          return (
            <div className='row' key={elm._id} >
              <div className='col-md-12 col-xl-8 d-flex flex-row' >
                <div className='col-4 d-flex flex-column'>
                  <img className='img-fluid pt-1' style={{ maxWidth: "10rem", maxHeight: "10rem" }} src={elm.image1} alt='img' onClick={() => setimg(`${elm.image1}`)}></img>
                  <img className='img-fluid pt-1' style={{ width: "10rem" }} src={elm.image} alt='img' onClick={() => setimg(`${elm.image}`)}></img>
                  <img className='img-fluid pt-1' style={{ maxWidth: "10rem", maxHeight: "10rem" }} src={elm.image2} alt='img' onClick={() => setimg(`${elm.image2}`)}></img>
                  <img className='img-fluid pt-1' style={{ width: "10rem" }} src={elm.image3} alt='img' onClick={() => setimg(`${elm.image3}`)}></img>
                </div>
                <div className='col-8 ps-1' style={{ margin: "auto" }}>
                  <img className='img-fluid pt-1' style={{ maxHeight: "30rem" }} src={img || elm.image} alt='img'></img>
                </div>
              </div>
              <div className='col-md-12 col-xl-4 d-flex flex-column'>
                <h3>{elm.name}</h3>
                <span>4.3<i class="fa-solid fa-star" style={{ color: "gold" }}></i> rating
                </span>
                <span>(20 reviews)</span>
                <span style={{ fontWeight: "500" }}>MRP:{INDIA.format(`${elm.price}`)}</span><br></br>
                <span style={{ fontWeight: "300" }}>{elm.description}</span>
                <span className='mt-4 d-flex flex-row justify-content-between'>
                  <span><span className='d-flex flex-column text center'><i class="fa-solid fa-truck-fast ps-4"></i>Fast Delivery</span></span>
                  <span><span className='d-flex flex-column text center'><i class="fa-solid fa-retweet ps-5"></i>7 Days placement</span></span>
                  <span><span className='d-flex flex-column text center'><i class="fa-solid fa-shield ps-5"></i>1 Yeat Warranty</span></span>
                </span>
                <hr style={{ color: "red" }}></hr>
                <span>Available: <span style={{ fontWeight: "500" }}>In stock</span></span>
                <span>Brand: <span style={{ fontWeight: "500" }}>{elm.company}</span></span>
                <hr style={{ color: "black", height: "2px" }}></hr>
                <span>Color: <span style={{ fontWeight: "500" }}>
                  {
                    elm.colors.map(col => {
                      return (
                        <button className='ms-1' style={{ backgroundColor: col, color: 'white', borderRadius: "50%", width: "20px", height: "20px", fontSize: "10px" }} onClick={() => setproCol(col)}>
                          {
                            col === proCol ? <i class="fa-solid fa-check"></i> : null
                          }
                        </button>
                      )
                    })
                  }
                </span></span>
                <span><button className='mt-2' style={{ border: "none" }} onClick={() => proQu > 1 ? setproQu(--proQu) : setproQu(1)}>-</button> &nbsp; &nbsp; &nbsp; {proQu} &nbsp; &nbsp; &nbsp;<button className='' style={{ border: "none" }} onClick={() => proQu < 5 ? setproQu(++proQu) : setproQu(5)}>+</button></span>
                <button className='btn btn-primary mt-3'  onClick={send}>Add to cart</button>
              </div>
            </div>
          )
        })
      }
    </div >
  </>

);
}

export default SingleProduct;
