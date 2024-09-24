import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contactme.css'
export const Contactme = () => {
  const form = useRef();
  /* =================== empty field =============== */
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  /* =================== update status when change value of feild ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /* ================== notification ================ */
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4vs2em8', 'template_p2yszsl', form.current, {
        publicKey: 'JPY1p65T7xofQfj5I',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({ from_name: '', from_email: '', message: '' });
          setNotification('SUCCESS');
          setShowNotification(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotification('FAILD. TRY AGAIN');
          setShowNotification(true);
        },
      );
  };
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [showNotification]);
  return (
   <div className="contactMe">
      <form className='flex-col' ref={form} onSubmit={sendEmail}>
        <input className='name' type="text" name="from_name" placeholder='Your Name' 
          value={formData.from_name} onChange={handleChange} required />
        <input className='email' type="email" name="from_email" placeholder='Your Email'
         value={formData.from_email} onChange={handleChange} required />
        <textarea className='message' name="message" placeholder='Your Message' 
         value={formData.message} onChange={handleChange} required/>
        <input className='submitButton' type="submit" value="Send" />
      </form>
      {notification && <div style={{ transition: 'opacity 0.5s', opacity: showNotification ? 1 : 0 }} className='notification'>{notification}</div>}
   </div>
  );
};