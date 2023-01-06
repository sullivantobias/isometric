import classNames from "classnames";

import "./index.scss";

function Icon({ src, iconElement, className, onClick }) {
  return (
    <div onClick={onClick} className={classNames("Icon", className)}>
      {!iconElement ? <img src={src} alt={src} /> : iconElement}
    </div>
  );
}

export default Icon;
