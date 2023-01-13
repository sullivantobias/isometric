import { useRef, useEffect } from "react";

import { gsap } from "gsap";

import "./index.scss";

function MouseTrail() {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const textRef = useRef(null);

  function onMouseMove(e) {
    gsap.to(bigBallRef.current, 0.4, {
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
    gsap.to(smallBallRef.current, 0.1, {
      x: e.clientX - 5,
      y: e.clientY - 7,
    });
  }

  function onMouseHover() {
    gsap.to(bigBallRef.current, 0.3, {
      scale: 4,
    });

    gsap.set(textRef.current, {
      opacity: 1,
    });
  }

  function onMouseHoverOut() {
    gsap.to(bigBallRef.current, 0.3, {
      scale: 1,
    });

    gsap.set(textRef.current, {
      opacity: 0,
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    const hoverables = document.querySelectorAll(".hoverable");

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener("mouseenter", onMouseHover);
      hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }
  }, []);

  return (
    <div className="Cursor">
      <div ref={bigBallRef} className="Cursor__ball">
        <span ref={textRef} className="Cursor__text">
          View
        </span>
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div ref={smallBallRef} className="Cursor__ball">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
}

export default MouseTrail;
