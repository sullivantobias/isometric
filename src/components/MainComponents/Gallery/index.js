import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import imagesLoaded from "imagesloaded";

import "./index.scss";

function Gallery() {
  const sectionIndex = [1, 2, 3];
  const imgIndex = [1, 2, 3, 4, 5];

  useLayoutEffect(() => {
    const images = gsap.utils.toArray("img");

    const scrollEffect = () => {
      document.scrollingElement.scrollTo(0, 0);

      gsap.utils.toArray("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper");

        const [x, xEnd] =
          index % 2
            ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              start: "top 92%",
              scrub: 0.5,
            },
          }
        );
      });
    };

    imagesLoaded(images).on("always", scrollEffect);
  }, []);

  const onMouseEnter = ({ currentTarget }) => {
    const timeLine = gsap.timeline({
      defaults: {
        duration: 0.5,
      },
    });

    timeLine
      .to(currentTarget, {
        scale: 1.2,
        filter: "grayscale(0%)",
        opacity: 1,
      })
      .to(currentTarget, {
        scale: 1,
        filter: "grayscale(80%)",
        opacity: 0.6,
      });
  };

  return (
    <div className="Gallery">
      <div className="Gallery__wrapper">
        {sectionIndex.map((id) => {
          return (
            <section key={id} className="Gallery__section">
              <ul className="wrapper">
                {imgIndex.map((imgId) => {
                  return (
                    <li key={imgId}>
                      <img
                        onMouseEnter={onMouseEnter}
                        src={`https://picsum.photos/1600/800?random=${imgId}`}
                        alt=""
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
export default Gallery;
