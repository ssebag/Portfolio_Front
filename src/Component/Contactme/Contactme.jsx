import React, { useRef, useState, useEffect, useContext} from 'react';
import emailjs from '@emailjs/browser';
import './Contactme.css'
import {LangContext} from './../../i18n';

export const Contactme = () => {
  const { t } = useContext(LangContext);
  const lang= localStorage.getItem("language");

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
   <div className={`contactMe ${lang ==='ar' ? 'arabic' : ''}`}>
      <form className='flex-col' ref={form} onSubmit={sendEmail}>
        <input className='name' type="text" name="from_name" placeholder={t("contacts.your_name")} 
          value={formData.from_name} onChange={handleChange} required />
        <input className='email' type="email" name="from_email" placeholder={t("contacts.your_email")} 
         value={formData.from_email} onChange={handleChange} required />
        <textarea className='message' name="message" placeholder={t("contacts.your_message")} 
         value={formData.message} onChange={handleChange} required/>
        <input className='submitButton' type="submit" value={t("contacts.send")} />
      </form>
      {notification && <div style={{ transition: 'opacity 0.5s', opacity: showNotification ? 1 : 0 }} className='notification'>{notification}</div>}
   </div>
  );
};