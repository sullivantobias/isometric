import { forwardRef } from "react";

import classNames from "classnames";

import "./index.scss";

const Icon = forwardRef(({ src, iconElement, className, onClick }, ref) => (
  <div ref={ref} onClick={onClick} className={classNames("Icon", className)}>
    {!iconElement ? <img src={src} alt={src} /> : iconElement}
  </div>
));

export default Icon;
