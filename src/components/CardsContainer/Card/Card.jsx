import './Card.css'

export default function Card({ cardClass, title, description, imgSrc, altText }) {

  return (
    <div className={`cards ${cardClass}`}>
      <div className="line"></div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="image">
          <img src={imgSrc} alt={altText} />
        </div>
      </div>
    </div>
  );
}