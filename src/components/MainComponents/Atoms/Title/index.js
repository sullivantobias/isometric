import classNames from "classnames";

import "./index.scss";

function Title({ title, className }) {
  return (
    <div className={classNames("Title", className)}>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
