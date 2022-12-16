import Card from "../Card";

import "./index.scss";

function Cards({ cards }) {
  return (
    <div className="Cards">
      {cards.map((src) => (
        <Card src={src} />
      ))}
    </div>
  );
}

export default Cards;
