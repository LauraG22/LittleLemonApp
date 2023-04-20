import foodPic from "./restaurantFood.jpg";
export default function Header(props) {
  return (
    <header>
      <div id="banner"></div>

      <img src={foodPic}></img>
      <div class="card">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediteranian restaurant, focused on traditional
          receipes with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
    </header>
  );
}
