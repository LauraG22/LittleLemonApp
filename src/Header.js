import foodPic from "./restaurantFood.jpg";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header>
      <div id="banner"></div>

      <img src={foodPic}></img>
      <div className="card">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediteranian restaurant, focused on traditional
          receipes with a modern twist.
        </p>
        <button aria-label="reservation">
          <Link to="/booking">Reserve a Table</Link>
        </button>
      </div>
    </header>
  );
}
