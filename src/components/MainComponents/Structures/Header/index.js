import Timeline from "../../Timeline";

import "./index.scss";

function Header({ sections }) {
  return (
    <div className="Header">
      <Timeline sections={sections} />
    </div>
  );
}

export default Header;
