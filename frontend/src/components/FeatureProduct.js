import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
 
function  FeatureProduct() {
    let [filtered, setfiltered] = useState([]);
    let allData =[];
    let fData = [];
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await fetch('https://general-store-six.vercel.app/');
                const data = await res.json();
                let i = 0;
                for (i = 0; i < data.length; i++) {
                    if (data[i].featured === "true") {
                        fData = [...fData, data[i]];
                    }
                }
                
                setfiltered(fData);
                allData = data;
                

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
    return (
        <div className='container'>
            <p>CHECK NOW!</p>
            <h1>Our Discount Products</h1>
            <div className='row'>
                 {filtered.map(element => {
                                return (
                                    <NavLink className="col" to={`/singleProduct/${element._id}`} key={element._id} style={{ textDecoration:"none",color:"black"}} >
                                        <div class="card">
                                            <img src={element.image} class="card-img-top" alt="image" />
                                            <div class="card-body ">
                                                <span className='d-flex justify-content-around'>
                                                <span class="fs-5 ">{element.name}</span>
                                                <span class="fs-5 " style={{marginLeft:"",color:"blue"}}>{INDIA.format(`${element.price}`)}
                                                </span>
                                                
                                                </span>
                                            </div>
                                           
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
            </div>
        </div>
    );
}

export default FeatureProduct;
