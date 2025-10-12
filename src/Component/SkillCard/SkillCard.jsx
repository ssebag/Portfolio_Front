import './SkillCard.css'

export default function SkillCard({ skill,  progress}) {
  //============================= Mode =======================
  const theme= localStorage.getItem("theme");
  return (
    <div className='skillCard'>
     <p className='skill_name'>
        {skill} 
      </p>
      <div className="col-lg-7 col-md-10 col-sm-11 col-12 progress">
        <div className="progress-bar progress-bar-info progress-bar-striped" style={{width:progress}}>
          <div className="progress-value" style={{left:`calc(${progress} - 5%)`}}>
             {progress}
            </div>
          </div>
       </div>
    </div>
  );
}
