import logo from "./Logo.svg";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo}></img>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Log In</a>
        </li>
      </ul>
    </nav>
  );
}
