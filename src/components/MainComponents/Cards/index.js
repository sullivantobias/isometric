import Card from "../Card";

import "./index.scss";

function Cards({ cards, mouseClient }) {
  return (
    <div className="Cards">
      {cards.map((src) => (
        <Card mouseClient={mouseClient} key={src} src={src} />
      ))}
    </div>
  );
}

export default Cards;
