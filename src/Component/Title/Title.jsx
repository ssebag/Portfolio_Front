import React from 'react';
import  './Title.css'

export default function Title({title,nameClass, description}) {

  return (
    <div  className="title">
        <h2 className={`titleSection ${nameClass}`}>{title}</h2>
        <p className="descSection">{description}</p>
    </div>
  )
}
