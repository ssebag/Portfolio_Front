import React from 'react'
import './Media.css'
import FB from './../../assets/images/media/FB.jpg'
import Telgram from './../../assets/images/media/Telgram.jpg'
import Insta from './../../assets/images/media/Insta.jpg'
import Whatsapp from './../../assets/images/media/Whatsapp.jpg'

export default function Media() {
  return (
    <div className='media flex-center'>
    <a target="_blank" href="https://www.facebook.com/sseba.gh?mibextid=ZbWKwl">
      <i className="fab fa-facebook-f icon"></i>
    </a>
    <a target="_blank" href="https://t.me/Ssebagh96">
      <i className="fab fa-telegram pointer icon" aria-hidden="true"></i>
    </a>
    <a target="_blank" href="https://www.instagram.com/sseba_g?igsh=b3ljZmJjb3Y1cGd4">
      <i className="fab fa-instagram pointer icon" aria-hidden="true"></i>
    </a>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=+963932531446">
      <i className="fab fa-whatsapp pointer icon" aria-hidden="true"></i>
    </a>
    </div>
  )
}