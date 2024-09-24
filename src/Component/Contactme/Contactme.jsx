import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactme.css'
export const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4vs2em8', 'template_p2yszsl', form.current, {
        publicKey: 'JPY1p65T7xofQfj5I',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div className="contactMe">
      <form className='flex-col' ref={form} onSubmit={sendEmail}>
        <input className='name' type="text" name="from_name" placeholder='Your Name' />
        <input className='email' type="email" name="from_email" placeholder='Your Email' />
        <textarea className='message' name="message" placeholder='Your Message' />
        <input className='submitButton' type="submit" value="Send" />
      </form>
   </div>
  );
};