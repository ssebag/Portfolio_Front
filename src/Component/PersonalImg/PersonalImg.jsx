import React from 'react'
import './PersonalImg.css'
import {motion} from 'framer-motion' 
import myPhoto from './../../assets/images/MyPhoto.png'
export default function PersonalImg() {
  return (
      <div className="personalImg">
        <motion.img src={myPhoto} 
        initial={{x:-400, rotate: 200}}
        animate={{x:0, rotate: 0}}
        transition={{duration: 2}}  />
      </div>  
  )
}
