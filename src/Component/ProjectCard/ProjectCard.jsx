import React,{ useState } from 'react'
import './ProjectCard.css'

export default function ProjectCard({data}) {

  const {img1, title, github, web, skills} = data;
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
        setIsHovered(true);
    };

   const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <div className="projectCard">
       <div className='projectInfo' id='projectInfo' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <img  src={img1} />
        
         <div className='projectSkills' style={isHovered ? {display:'block'} : {display:'none'}} id='projectSkills'>
          <p className='hoverSkillsP' style={{color:'var(--purple-color)'}}>{skills}</p>
         </div>
        
       </div>
       <div className="flex-col">
         <h2>{title}</h2>
         <div className='cardButtons'>
            <button className='flex-center'>
                  <i className="fab fa-github pointer text-light"></i>
                  <a target="blank" href={github}>Code</a>
              </button>
              <button className='flex-center'>
                  <i className="fa fa-globe pointer" ></i>
                  <a target="blank" href={web}>Demo</a>
              </button>
         </div> 
       </div>
    </div>
  )
}
 
