import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cehssbq", "template_i8rjpge", formRef.current, {
        publicKey: "H-hJNCxFRt3HfKmMW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Lets work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>HCM cty, VietNam</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+94 123456</span>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="massage" name="massage"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
