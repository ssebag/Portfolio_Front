import './SkillCard.css'
export default function SkillCard({ image, description }) {

  return (
    <>
      <div className="skillCard flex-col">
        <img src={image} alt="" />
      </div>
    </>
  );
}
