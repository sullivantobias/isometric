import { forwardRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import classNames from "classnames";

import "./index.scss";

gsap.registerPlugin(ScrollTrigger);

const Title = forwardRef(({ className, title }, ref) => (
  <div ref={ref} className={classNames("Title", className)}>
    <h1>{title}</h1>
  </div>
));

export default Title;
