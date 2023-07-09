import { Link } from "react-router-dom";

export function Button({text = '', path = ''}) {
    return (
      <Link to={path} className="btn btn-primary main-button">
        {text}
      </Link>
    );
  }