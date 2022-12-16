import "./index.scss";

function Card({ src }) {
  return (
    <div className="Card">
      <img src={src} alt="" />
    </div>
  );
}

export default Card;
