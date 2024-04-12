import React from 'react'
import Icons from './Icons';

const Contact = () => {
    const handle = () => {
        alert('Contact saved sucessfully!');

    };
    return (
        <>
            {/* <div className='contact'>

                <div id="contact">

                    <div class="contact head">
                        <h1 style={{ color: '#9c506e' }}>Contact</h1>

                    </div>
                    <div class="">
                        <input type="text" placeholder="Enter Your Name" id="name" />
                        <input type="Email" placeholder="Enter Your Email" id="email" />
                        <textarea rows="6" cols="35" placeholder="Your Message..." id="msg"></textarea>

                        <button onClick={handle}>Submit</button>
                        <div class="icons">
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>


                    </div>

                </div>

            </div> */}

<div className='main-container'>



<h2 style={{ color: '#9c506e' }} className='sub-head'>Contact</h2>
<div className='contact-container'>

<form onSubmit={handle} className='contact-form'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        //  value={formData.name}
        //  onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        //  value={formData.email}
        //  onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
        //  value={formData.message}
      //    onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
</div>
</div>
        </>




    )
}

export default Contact
