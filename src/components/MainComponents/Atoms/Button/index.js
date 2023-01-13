import { forwardRef } from "react";

import "./index.scss";

const Button = forwardRef(({ text, onClick }, ref) => (
  <div ref={ref}>
    <button onClick={onClick} className="Button">
      {text}
    </button>
  </div>
));

export default Button;
