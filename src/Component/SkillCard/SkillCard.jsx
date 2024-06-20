import './SkillCard.css'

export default function SkillCard({ skill,  progress}) {
  
  return (
    <>
      <div className="skillCard flex-center flex-col">
        <p>{skill}</p>
        <div class="progress-div" data-progress={progress} style={{"--progress": progress }}>{progress}</div>    
      </div>
    </>
  );
}
