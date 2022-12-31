import "./index.scss";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="Button">
      {text}
    </button>
  );
}

export default Button;
