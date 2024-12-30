import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Item from "./components/Item";
import Itemg from "./components/Itemg";

const Products = () => {
  let [filtered, setfiltered] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('https://general-store-back.onrender.com');
        const data = await res.json();
        setfiltered(data);

      } catch (error) {
        console.log(error);
      };
    };
    fetchdata();
  }, []);

  let [view, setview] = useState(false)
  function handlermenu() {
    if (view === false) {
      setview(true)
    }
  };
  function handlergrid() {
    if (view === true) {
      setview(false)
    }
  };
  let [select, setselect] = useState();
  function handlerselect(e) {
    setselect(e.target.value)
    console.log(select);
  };
  switch (select) {
    case "lowest":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "highest":
      (filtered.sort((a, b) => b.price - a.price));
      break;
    case "a-z":
      (filtered.sort((a, b) => a.name.localeCompare(b.name)));
      break;
    case "z-a":
      (filtered.sort((a, b) => b.name.localeCompare(a.name)));
      break;
  }
  let [search, setsearch] = useState();
  const handelsearch = (e) => {
    setsearch(e.target.value)
     };
  let data = [];
  if (search) {
    for (let i = 0; i < filtered.length; i++) {
      let a = filtered[i].name.toLowerCase().includes(search);
      if (a == true) {
        data.push(filtered[i]);
      }
    }
  }
   let category = filtered.map(elm=>{
    return(
    elm.category ) 
   });
   
   category = ["All",...new Set(category)];
  //  console.log(category);
   let [categoryitem,setcategoryitem] = useState("All")
  function handelcategory(event){
    setcategoryitem(event.target.value);
  }

  return (
    <div className="container border mt-5">
      <div className="row">
        <div className="col-lg-3 mt-4 ps-5">
          <form>
            <input type="text" name="search" placeholder="Search Product Name" onChange={handelsearch}></input>
          </form>
        </div>
        <div className="col mt-3 d-flex justify-content-around">
          <span>
            <button className={view ? "menuBA" : "menuB"} onClick={handlermenu}><i class="fa-solid fa-bars"></i></button>&nbsp;&nbsp;&nbsp;
            <button className={view ? "menuB" : "menuBA"} onClick={handlergrid}> <i class="fa-solid fa-grip"></i></button>
          </span>
          <span>{data.length || filtered.length} Total Products</span>
          <span>
            <form>
              <label for="sort"></label>
              <select name="sort" id="sort" onChange={handlerselect}>
                <option value="highest">Price(highest)</option>
                <option value="lowest">Price(lowest)</option>
                <option value="a-z">(a-z)</option>
                <option value="z-a">(z-a)</option>
              </select>
            </form>
          </span>
        </div>
      </div>
      <div className="row mt-3">
        <div className=" col-sm-3"  >
          <div className=" mt-3 ms-5" >
            <h3>Category</h3>
          {
            category.map(elm=>{
              return(
                <>
              <button  name="category" value={elm} onClick={handelcategory} className={categoryitem===`${elm}`?"buttn mt-1":"button mt-1"}>{`${elm}`.toUpperCase()} </button> <br></br>
              </>
              )
            })
          }
          </div>
          
        
        </div>
        <div className="col-sm-9 ">
          <div className="row ">
            {view ? <Itemg data={search ? data : filtered} categoryitem={categoryitem} /> : <Item data={search ? data : filtered} categoryitem={categoryitem}/>}
          </div>
        </div>
      </div>
    </div>
  )
};



export default Products;
