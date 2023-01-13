import { useLayoutEffect, useRef } from "react";

import { gsap, Power2 } from "gsap";

import classNames from "classnames";
import Icon from "../Icon";

import "./index.scss";

function Arrows({ anchor, revert }) {
  const firstArrowRef = useRef(null);
  const secondArrowRef = useRef(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 0.7, ease: Power2.easeInOut },
    });

    timeline
      .fromTo(
        firstArrowRef.current,
        {
          y: 0,
        },
        {
          y: 30,
          repeat: -1,
          yoyo: true,
        }
      )
      .fromTo(
        secondArrowRef.current,
        {
          y: 0,
        },
        {
          y: 40,
          repeat: -1,
          yoyo: true,
        },
        0.1
      );
  }, []);

  return (
    <a href={anchor} className={classNames("Arrows", { "is-revert": revert })}>
      <Icon ref={firstArrowRef} src="assets/smallArrow.png" />
      <Icon ref={secondArrowRef} src="assets/bigArrow.png" />
    </a>
  );
}

export default Arrows;
