import React from 'react';
function Servers() {
    return (  
       <div className='container'>
        <div className='row m-5'>
            <div className='col border text-center pt-5 ' style={{borderRadius:"15px",backgroundColor:"#f0f2f1"}}>
            <i class="fa-solid fa-truck" style={{color:"#1004B6"}}></i>
            <p>Super fast and free delivery</p>
            </div>
            <div className='col'>
                <div className='col border text-center m-auto' style={{borderRadius:"15px",backgroundColor:"#f0f2f1"}}>
                <i class="fa-solid fa-shield" style={{color:"#1004B6"}}></i>
                    <p>Non-contact Shippoing</p>
                </div>
                <div className='col border text-center m-auto mt-2' style={{borderRadius:"15px",backgroundColor:"#f0f2f1"}}>
                <i class="fa-solid fa-sack-dollar" style={{color:"#1004B6"}}></i>
                    <p>Money back guaranteed</p>
                </div>
            </div>
            <div className='col border text-center pt-5' style={{borderRadius:"15px",backgroundColor:"#f0f2f1"}}>
            <i class="fa-solid fa-shield-halved" style={{color:"#1004B6"}}></i>
                <p>Super Secure Payment System</p>
            </div>
        </div>
       </div>
    );
}

export default Servers;