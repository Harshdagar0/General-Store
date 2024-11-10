 import React from 'react';
 

const Contact = () => {


  return (
    <div className="container mt-5">
      <h1 className="text-center m-3">Feel Free To Contact Us</h1>
      <div className="row">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56023.860490438616!2d76.91060110817484!3d28.645005168082257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0ef06e275373%3A0xce845ca69310785!2sJharoda%20Kalan%2C%20Delhi!5e0!3m2!1sen!2sin!4v1729613818160!5m2!1sen!2sin"
         width="100%"
          height="450"
           style={{border:0}}
            allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
      </div>
      <div className="row text-center mt-5 ">
        <form action="https://formspree.io/f/mnnqngnb" method="POST" className=' '>
          <input className='m-2 border w-50 text-center' type="text" name="username" placeholder="Username" required autoComplete="off"></input><br></br>
          <input  className='m-2 border w-50 text-center'type="text" name="Email" placeholder="Email" required autoComplete="off"></input><br></br>
          <textarea  className='m-2 border w-50 text-center'name='message' placeholder='Enter your Message' required autoComplete='off'></textarea><br></br>
          <button type='submit' className='btn W-25 ' style={{backgroundColor:"#1004B6",color:"white"}}>submit</button>
        </form>

      </div>
    </div>
  )
};

export default Contact;

