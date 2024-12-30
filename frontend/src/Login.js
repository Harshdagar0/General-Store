import { React, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



function Login() {
    const navigate = useNavigate();
    
    let [email, setemail] = useState();
    let [password, setpassword] = useState();

    function handelemail(e) {
        setemail(e.target.value)
    };
    function handelpassword(e) {
        setpassword(e.target.value)
    };
    let data = [];
    const check = async (e) => {
        e.preventDefault();
        let logindetails = {
            email: email,
            password: password
        };

        const res = await fetch("https://general-store-back.onrender.com/login", {
            method: "POST",
            body: JSON.stringify(logindetails),
            headers: {
                'content-Type': 'application/json'
            }
        });

        data = (await res.json());
        localStorage.setItem("login", JSON.stringify(data));
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
        if(data.message==="login successfully"){

             setTimeout(() => {
                navigate("/");
             window.location.reload(false);
                
             }, 2000);
        }

    };
    
    return (
        <div className='container d-flex justify-content-center' style={{ marginTop: "60px" }}>

            <div className='Login  border p-3 mt-5' style={{ maxWidth: "300px" }}>

                <h2>Login</h2>
                <form onSubmit={check}>
                    <label htmlFor='inputEmail4' ><strong>Email</strong></label>
                    <input type='email' required placeholder='Enter email' id="inputEmail4" onChange={handelemail} name='email' autoComplete='off' className='form-control rounded'></input><br></br>
                    <label htmlFor='email'><strong>Password</strong></label>
                    <input type='password' required placeholder='Enter password' onChange={handelpassword} name='password' autoComplete='off' className='form-control rounded'></input><br></br>
                    <button type='submit' className=' btn btn-primary form-control' > Login</button> 
                    <span>if don't have a account first register</span>
                    <NavLink to="/register" className=' btn btn-success form-control'>Register</NavLink>

                    <Toaster />
                </form>
            </div>
          
        </div>
    );
}

export default Login;
