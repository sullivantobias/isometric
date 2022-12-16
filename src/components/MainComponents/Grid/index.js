import "./index.scss";

function Grid() {
  return (
    <div className="Grid">
      <div className="Grid__content">
        <div className="Grid__content__vertical">
          <div className="line"></div>
          {Array.from(Array(11), (e, i) => (
            <div className="line"></div>
          ))}
        </div>
        <div className="dots">
          {Array.from(Array(7), (e, i) => (
            <div className="dot"></div>
          ))}
        </div>
        <div className="Grid__content__horizontal">
          {Array.from(Array(11), (e, i) => (
            <div className="line"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
