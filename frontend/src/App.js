import React from "react";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Errorpage from "./Errorpage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Login"
import Register from "./Register";
const App = () => {
  let logindeails = JSON.parse(localStorage.getItem("login"));

  return  (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/singleProduct/:id" element={<SingleProduct/>}></Route>
      {logindeails?
      <Route path="/cart" element={<Cart/>}></Route>:
      
      <Route path="/login" element={<Login/>}></Route>
    }
      <Route path="/register" element={<Register/>}></Route>
      <Route path="*" element={<Errorpage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
};

export default App;
