import "./index.scss";

function Card({ src, mouseClient }) {
  return (
    <div
      className="Card"
      style={{
        transform:
          mouseClient &&
          `translate3d(-${mouseClient.x * 3}%, -${mouseClient.y * 3}%, 0)`,
      }}
    >
      <img src={src} alt="" />
    </div>
  );
}

export default Card;
