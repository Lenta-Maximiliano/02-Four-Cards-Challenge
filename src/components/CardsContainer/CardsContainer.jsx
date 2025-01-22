import Card from "./Card/Card.jsx";
import './cardsContainer.css'

export default function CardsContainer() {

  return (
    <div className="cardsContainer">
      <Card
        cardClass="card1"
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
        imgSrc="/images/icon-supervisor.svg"
        altText="Icono lupa"
      />
      <div className="twoCards">
        <Card
          cardClass="card2"
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          imgSrc="/images/icon-team-builder.svg"
          altText="Icono team builder"
        />
        <Card
          cardClass="card3"
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          imgSrc="/images/icon-karma.svg"
          altText="Icono karma"
        />
      </div>
      <Card
        cardClass="card4"
        title="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
        imgSrc="/images/icon-calculator.svg"
        altText="Icono calculadora"
      />
    </div>
  );
}