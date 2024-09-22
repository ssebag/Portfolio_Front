import React,{useContext} from 'react'
import  './PersonalInfo.css'
import {motion, transform} from 'framer-motion' 
import {LangContext} from './../../i18n';
export default function PersonalInfo() {
  //======================= for animation ===========================
  const textVariants={
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition:{
        staggerChildren: 0.3
      }
    },
  };
  const nameVariants={
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  /* ================= for move hand ================ */
  const hand = document.getElementById('hand');
  let isMoved = false;
  
  setInterval(() => {
      if (isMoved) {
          hand.style.transform = 'translateY(0px)'; 
      } else {
          hand.style.transform = 'translateY(40px)'; 
      }
      isMoved = !isMoved; 
  }, 1000); 


  //========================= for translation ==============================
  const {t} = useContext(LangContext);
  return (
    <div className="personalInfo flex-col">
        <p className='personalInfoPara'>{t("personality.welcome")}</p>
        <motion.h1 variants={textVariants} initial="hidden" animate="visible">
          {t("personality.myName").split("").map((char, index)=>
            <motion.span key={index} variants={nameVariants}>{char}</motion.span>
           )}
        </motion.h1>
       
        <p className='personalInfoPara'>Front-end Developer & Freelancer</p>
        <br />
        <p className='introduction'>{t("personality.introduction")}</p>
        <i class="fa-regular fa-hand-point-down" id="hand"></i>
    </div>
  )
}

