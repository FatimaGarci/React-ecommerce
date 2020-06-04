import React from 'react';
import './css/contact.css';

export default function Contact() {
    return (
        <section id="contactForm">
            <div className="formImage">
                <div className="side-picture">
                    <h2>Contact Us! <br/>
                        Learn more about our cameras.
                    </h2>
                    <hr role="tournament3"/>
                    <h3><i className="fas fa-phone"></i>(985) 870-7929</h3>
                    <h3><i className="fas fa-envelope"></i>Fatima.R.Lopez@outlook.com</h3>
                    <h3><i className="fas fa-map-marker-alt"></i>9118Chauvin Louisiana</h3>
                </div>
            </div>
            <form className="formContainer" >
                <div className="contact-items">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Your Name..." required />
                </div>
                <div className="contact-items">
                    <label htmlFor="lastname" >Last name:</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Your Last Name..." required />
                </div>
                <div className="contact-items">
                    <label htmlFor="email" >Email:</label>
                    <input type="email" name="email" id="email" placeholder="Your Email..." required />
                </div>
                <div className="contact-items">
                    <label htmlFor="message">Leave a message.</label>
                    <textarea name="message" cols="30" rows="10"  id="message" placeholder="Type a message" required></textarea>
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </section>
    )
}
