import Button from "../Atoms/Button";
import "./index.scss";

function Section({ children, id, title, description, isButton, onClick }) {
  return (
    <div id={id} className="Section">
      <div className="Section__info">
        <h1 className="Section__title">{title}</h1>
        <p className="Section__description">{description}</p>
        {isButton && <Button onClick={onClick} text={"Enter"} />}
      </div>

      <div className="Section__children">{children}</div>
    </div>
  );
}

export default Section;
