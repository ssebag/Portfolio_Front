import React,{useContext} from 'react'
import  './PersonalInfo.css'
import {motion} from 'framer-motion' 
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
  //========================= for translation ==============================
  const {t} = useContext(LangContext);
  return (
    <div className="personalInfo flex-col">
        <p>{t("personality.welcome")}</p>
        <motion.h1 variants={textVariants} initial="hidden" animate="visible">
          {t("personality.myName").split("").map((char, index)=>
            <motion.span key={index} variants={nameVariants}>{char}</motion.span>
           )}
        </motion.h1>
       
        <p>Front-end Developer</p>
    </div>
  )
}

