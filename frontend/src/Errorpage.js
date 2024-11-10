import React from 'react';
import { NavLink } from 'react-router-dom';
function Errorpage() {
    return ( 
        <div className='container text-center mt-5'>
            <h1>404</h1>
            <p className='fs-3'>UH OH! you're lost.</p>
            <p>The page you are looking is note exit.How to get here is mystery.But you can click the button below to go back the Homepage.</p>
            <NavLink className="btn border" style={{backgroundColor:"#1004B6",color:"white"}} to="/">GO BACK TO HOME</NavLink>
        </div>
     );
}

export default Errorpage;