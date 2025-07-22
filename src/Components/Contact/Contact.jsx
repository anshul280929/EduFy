import React from 'react'
import './Contact.css'
import meassage_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


function Contact() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const apiKey = process.env.REACT_APP_API_KEY;

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={meassage_icon} alt=""/></h3>
            <p>We're here to help! Whether you're a prospective student, 
               current student, parent, alumnus, or member of the community, we 
               welcome your questions and feedback. Please reach out to us by phone, 
               email, or visit us in person. For specific department contacts, visit our 
               directory or use the inquiry form below. We look forward to connecting with you!</p>
               <ul>
                    <li><img src={phone_icon} alt=""/>Phone: +91 6201388825</li>
                    <li><img src={mail_icon} alt=""/>Email: anshulbhaskar@gmail.com</li>
                    <li><img src={location_icon} alt=""/>Address: Dr. Ambedkar Institute of Technology</li>
               </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Enter your email' required/>
                <label htmlFor="Phone">Phone</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows="6" placeholder='Type your message here' required></textarea> 
                <button type='submit' className='btn dark-btn'>Send Message<img src={white_arrow} alt= ""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact