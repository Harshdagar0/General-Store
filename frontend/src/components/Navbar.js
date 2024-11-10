import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  let [logindeails, setlogindeails] = useState(JSON.parse(localStorage.getItem("login")));


  function send() {
    localStorage.removeItem("login");

  };

  function Login() {
    return (
      <NavLink className="nav-link active p-1 mt-1 mx-2" style={{ borderRadius: "10px", color: "white", backgroundColor: "black" }} aria-current="page" to="/login" onClick={send}>Login</NavLink>

    )
  };
  function Logout() {
    return (
      <a className="nav-link active p-1 mt-1 mx-2 w-100" style={{ borderRadius: "10px", color: "white", backgroundColor: "red" }} aria-current="page" href="/" onClick={send}>Logout</a>

    )
  }


  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light w-100 mb-5" style={{ position: "fixed", zIndex: "1", marginBottom: "30px", top: "0" }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="/">General Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item " >
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
            </li>
            <li class="nav-item ">
              <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
            </li>
            {logindeails ?
            <li class="nav-item d-flex flex-row"  >
              <NavLink className="nav-link active" aria-current="page" to="/cart"><i class="fa-solid fa-cart-shopping"></i></NavLink>
              <Logout/>
            </li>
             :
              <li className="nav-item">
                <Login />
              </li>
            }
            {
            }
            <li>

            </li>


          </ul>

        </div></div>

    </nav>


  )
}

export default Navbar;