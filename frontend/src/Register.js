import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



function Register() {
    let [name,setname]=useState();
    let [email,setemail]=useState();
    let [password,setpassword]=useState();
    let[logindata,setlogindata]=useState([]);
    let nevegate = useNavigate();
    let data =[];
    // let dat = localStorage.getItem("login");
    // dat = JSON.parse((dat));
    // console.log(typeof(dat));

    function handelname(e){
    setname(e.target.value)
    };
    function handelemail(e){
    setemail(e.target.value)
    };
    function handelpassword(e){
    setpassword(e.target.value)
    };
 
    const onSubmit = async (e) => {
      e.preventDefault();
      const userInfo = {
        fullname: name,  
        email: email,
        password: password,
      };
        const response = await fetch('http://localhost:3003/register',{
        method:'POST',
        body:JSON.stringify(userInfo),
        headers:{
          'Content-Type':'application/json'
        }
        });
         data = await response.json()
        console.log(data.message);
       
        let notify = () => toast(data.message,
          {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        notify();
        if(data.message==="User create successfully"){
          setTimeout(() => {
            nevegate("/login");
          }, 2000);
     }
    };
    return (  
        <div className='container d-flex justify-content-center' style={{marginTop:"60px"}}>
                <div className='Login mt-5 border p-3'  style={{maxWidth:"300px"}}>
                    <h2>Register</h2>
                    <form  onSubmit={onSubmit}>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' name='fullname' onChange={handelname} autoComplete='off' className='form-control rounded' required ></input><br></br>
                        <label htmlFor='inputEmail4' ><strong>Email</strong></label>
                        <input type='email' placeholder='Enter email' name='email' id="inputEmail4" onChange={handelemail} autoComplete='off' className='form-control rounded' required ></input><br></br>
                        <label htmlFor='email'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter password' name='password' onChange={handelpassword} autoComplete='off' className='form-control rounded' required ></input><br></br>
                        <button type='submit' className=' btn btn-primary form-control' >Register</button>
                        <span>Already have a account then Login</span>
                        <NavLink to="/login" className=' btn btn-success form-control'>Login</NavLink>
                        <Toaster/>
                    </form>
                </div>
        </div>
    );
}

export default Register;