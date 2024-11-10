import React from 'react';
function Footer() {
    return ( 
        <div className='container-fluid text-center mt-5' style={{backgroundColor:"#000026",color:'white'}}>
            <div className='row pt-5 d-flex justify-content-center'>
                <div className=' col-sm-12 col-md-3 mt-2'>
                    <p>General Store</p>
                    <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't
                      quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind
                     </p>
                </div>
                <div className=' col-sm-12 col-md-3 mt-2'>
                    <p>Subscribe to get important updates</p>
                    <form action='https://formspree.io/f/mwpkprbo' method='POST'>
                        <input type='text' placeholder='Email' name='email'autoComplete='off' className='text-center m-1 border rounded' required></input><br></br>
                        <button className='btn text-center m-1 border rounded' style={{backgroundColor:"#1004B6",color:"white"}}>Subscribe</button>
                    </form>
                </div>
                <div className='col mt-2'>
                    <p>Follow Us</p>
                    <div className=''>
                   <a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"white"}}> <i class="fa-brands fa-github"></i></a>
                   <a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"white"}}> <i class="fa-brands fa-instagram"></i></a>
                   <a href='' className='mx-2 fs-5' style={{textDecoration:"none",color:"white"}}> <i class="fa-brands fa-youtube"></i></a>
                    </div>
                   
                </div>
                <div className='col mt-2'>
                    <p>Call Us</p>
                    <p>+91 1234578888</p>
                </div>
            </div>
            <hr></hr>
            <div className='row'>
                <div className='col'>
                    <p>@2022 General Store. All Rigths Reserved</p>
                </div>
                <div className='col'>
                    <p>PRIVARY POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
            </div>
        </div>
     );
}

export default Footer;