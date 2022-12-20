import { useState } from "react";

import "./index.scss";

function Grid() {
  const windowWidth = window.innerWidth / 5;
  const windowHeight = window.innerHeight / 5;

  const [mouseClient, setMouseClient] = useState({});

  const handleHoverEffect = (e) => {
    console.log(mouseClient);
    setMouseClient({ x: e.clientX / windowWidth, y: e.clientY / windowHeight });
  };

  return (
    <div
      onMouseMove={(e) => handleHoverEffect(e)}
      style={{
        transform: `translate3d(-${mouseClient.x}%, -${mouseClient.y}%, 0)`,
      }}
      className="Grid"
    >
      <div className="Grid__content">
        <div className="Grid__content__vertical">
          <div className="line"></div>
          {Array.from(Array(11), (e, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
        <div className="dots">
          {Array.from(Array(7), (e, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>
        <div className="Grid__content__horizontal">
          {Array.from(Array(11), (e, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
