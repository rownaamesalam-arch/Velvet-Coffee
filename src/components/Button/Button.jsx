import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, variant, to }) {

  if (to) {

    return (

      <Link
        to={to}
        className={`button ${variant || ""}`}
      >
        {children}
      </Link>

    );

  }


  return (

    <button
      className={`button ${variant || ""}`}
    >
      {children}
    </button>

  );

}

export default Button;