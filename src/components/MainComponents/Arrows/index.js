import classNames from "classnames";
import Icon from "../Icon";

import "./index.scss";

function Arrows({ anchor, revert, onClick }) {
  return (
    <a
      onClick={onClick}
      href={anchor}
      className={classNames("Arrows", { "is-revert": revert })}
    >
      <Icon src="assets/smallArrow.png" />
      <Icon src="assets/bigArrow.png" />
    </a>
  );
}

export default Arrows;