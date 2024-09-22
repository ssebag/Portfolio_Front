import React from 'react'
import './Hero.css'
import PersonalImg from './../PersonalImg/PersonalImg'
import PersonalInfo from './../PersonalInfo/PersonalInfo'

export default function Hero() {
  return (
    <div className="hero">
      {/* <PersonalImg /> */}
      <PersonalInfo />
    </div>
  )
}
