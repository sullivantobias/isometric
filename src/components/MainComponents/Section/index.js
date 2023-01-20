import { useLayoutEffect, useRef } from "react";

import classNames from "classnames";

import { gsap } from "gsap";

import Button from "../Atoms/Button";
import Title from "../Atoms/Title";

import "./index.scss";

function Section({
  children,
  id,
  title,
  description,
  isButton,
  onClick,
  isRightSection,
  arrows,
}) {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const childrenRef = useRef(null);

  const effect = {
    x: -200,
    opacity: 0,
  };

  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        opacity: 1,
      },
      scrollTrigger: {
        trigger: titleRef.current,
        start: "left right",
      },
    });

    const noRightSectionTimeline = gsap.timeline({
      defaults: { duration: 1.5 },
    });

    isRightSection
      ? timeline
          .from(titleRef.current, effect)
          .from(
            childrenRef.current,
            {
              y: 200,
              opacity: 0,
            },
            "<"
          )
          .from(descRef.current, effect, 0.4)
          .from(buttonRef.current, effect, 0.5)
      : noRightSectionTimeline.from("h1", {
          y: 100,
          ease: "power4.easeOut",
        });
  }, []);

  return (
    <div
      id={id}
      className={classNames("Section", {
        Section__rightSection: isRightSection,
      })}
    >
      <div className="Section__info">
        <Title ref={titleRef} title={title} className="Section__title" />
        <p ref={descRef} className="Section__description">
          {description}
        </p>
        {isButton && (
          <Button ref={buttonRef} onClick={onClick} text={"Enter"} />
        )}
      </div>

      <div ref={childrenRef} className="Section__children">
        {children}
      </div>

      {arrows}
    </div>
  );
}

export default Section;
