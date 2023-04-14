import GreekSalad from "./GreekSalad.jpg";
import Bruschetta from "./Bruschetta.jpg";
import LemonDessert from "./LemonDessert.jpg";
export default function Main() {
  return (
    <main>
      <span class="action">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </span>
      <div class="menuitems">
        <div className="card">
          <a href="#" className="GreekSalad">
            <img src={GreekSalad}></img>
          </a>
          <div className="container">
            <h4>
              <b>Greek Salad</b>
            </h4>
            <h4>$12.99</h4>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives, and our
              Chcago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <h4>Order a delivery.</h4>
          </div>
        </div>
        <div className="card">
          <a href="#" className="Bruschetta">
            <img src={Bruschetta}></img>
          </a>
          <div className="container">
            <h4>
              <b>Bruschetta</b>
            </h4>
            <h4>$5.99</h4>
            <p>
              Our Bruschetta is made is grilled bread that has been smeared with
              garlic and seasoned with salt and olive oil.
            </p>
            <h4>Order a delivery.</h4>
          </div>
        </div>
        <div className="card">
          <a href="#" className="LemonDessert">
            <img src={LemonDessert}></img>
          </a>
          <div className="container">
            <h4>
              <b>Lemon Dessert</b>
            </h4>
            <h4>$5.00</h4>
            <p>
              This comes straight from Grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <h4>Order a delivery.</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
