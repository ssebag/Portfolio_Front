import React from 'react'
import './ContactCard.css'

export default function ContactCards({icon, title, description}) {
  const lang= localStorage.getItem("language");

  return (
    <div className="contactCard flex-center">
       <div className="contactIcon flex-center">
         <i className={`${icon} contactIconP`}></i>
       </div> 
        <div className={`contactDetails flex-col ${lang ==='ar' ? 'arabic' : ''}`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        
    </div>
  )
}
