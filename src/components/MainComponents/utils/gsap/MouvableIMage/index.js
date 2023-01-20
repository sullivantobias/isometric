import { useRef } from "react";

import { gsap } from "gsap";

import "./index.scss";

function MovableImage({ children }) {
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  const resetState = () =>
    gsap.to([containerRef.current, glowRef.current], {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
    });

  const onHover = (event) => {
    const elRect = event?.currentTarget.getBoundingClientRect();

    const positionX = event.clientX - elRect.x;
    const positionY = event.clientY - elRect.y;

    const midCardWidth = elRect.width / 2;
    const midCardHeight = elRect.height / 2;

    const angleY = -(positionX - midCardWidth) / 8;
    const angleX = (positionY - midCardHeight) / 8;

    const glowX = (positionX / elRect.width) * 100;
    const glowY = (positionY / elRect.height) * 100;

    gsap.to([containerRef.current, glowRef.current], {
      rotationY: angleY,
      rotationX: angleX,
      scale: 1.1,
    });

    gsap.to(glowRef.current, {
      background: `radial-gradient(circle at ${glowX}% ${glowY}%, white, transparent)`,
    });
  };

  return (
    <div className="MovableImage">
      <div
        onMouseMove={onHover}
        onMouseLeave={resetState}
        ref={containerRef}
        className="MovableImage__content"
      >
        {children}
      </div>
      <div ref={glowRef} className="MovableImage__glow"></div>
    </div>
  );
}

export default MovableImage;
