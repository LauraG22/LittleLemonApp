import logo from "./Logo.svg";
export default function Nav() {
  return (
    <nav>
      <a href="#" className="logo">
        <img src={logo}></img>
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
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
