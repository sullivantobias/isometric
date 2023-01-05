import { useEffect, useState } from "react";

import classNames from "classnames";

import "./index.scss";

function Timeline({ sections, onClick }) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sectionsElements = document.querySelectorAll(".Section[id]");

    window.addEventListener("scroll", () => {
      const wTop = window.pageYOffset;

      sectionsElements.forEach((section) => {
        if (wTop + 100 > section.offsetTop)
          setCurrentSection(Number(section.id));
      });
    });
  }, []);

  return (
    <div className="Timeline">
      {sections.map(({ title, timeLineTarget }, index) => (
        <div
          key={index}
          className={classNames("Timeline__block", {
            "is-active": currentSection === index,
          })}
        >
          <div className="Timeline__content">
            <a href={timeLineTarget}>{title}</a>
          </div>
          <div className="Timeline__marker"></div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
