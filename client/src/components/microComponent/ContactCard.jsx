import React from 'react';
import '../styles/ContactCard.css'

function ContactCard() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1>Contact</h1>
                        <p><i className='bx bxl-gmail'></i>knoxsiege@gmail.com</p>
                        <p><i className='bx bxs-phone' ></i>7017546270</p>
                        <div className="social-icon">
                            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                            <a href="#"><i className='bx bxl-linkedin-square'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                        </div> 
                    </div>
                    <div className="contact-right">
                        <form action="" className= "contact-form">
                            <input type="text" name="Name" id="nameDiv" placeholder="Name" required />
                            <input type="email" name="email" id="emailDiv" placeholder="Email" required />
                            <textarea name="Message" id="messageDiv" rows="6" placeholder="Your Message"></textarea>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
