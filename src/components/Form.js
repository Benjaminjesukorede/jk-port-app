import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./FormStyles.css";

const Form = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        'service_v2euvew',    // Replace with your EmailJS service ID
        'template_lbq17ql',   // Replace with your EmailJS template ID
        formRef.current,
        'I9j14RegPxope1wBs'        // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your email, please try again.");
        }
      );
  };

  return (
    <div className="form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input name="user_name" placeholder="Your Name" type="text" required /><br />
        <input name="user_email" placeholder="Email" type="email" required /><br />
        <input name="subject" placeholder="Subject" type="text" required /><br />
        <textarea name="message" rows="6" placeholder="Type your messages here" required></textarea>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
