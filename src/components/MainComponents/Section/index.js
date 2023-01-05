import Button from "../Atoms/Button";
import Title from "../Atoms/Title";

import "./index.scss";

function Section({ children, id, title, description, isButton, onClick }) {
  return (
    <div id={id} className="Section">
      <div className="Section__info">
        <Title title={title} className="Section__title" />
        <p className="Section__description">{description}</p>
        {isButton && <Button onClick={onClick} text={"Enter"} />}
      </div>

      <div className="Section__children">{children}</div>
    </div>
  );
}

export default Section;
