import Richelle from "./Richelle.jpg";
import Tommy from "./Tommy.jpg";
import Monique from "./Monique.jpg";
export default function Testimonials() {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials">
        <div className="card">
          <div id="cardHeading">
            <img src={Tommy}></img>
            <span>
              <h4>
                <b>Tommy B.</b>
              </h4>
              <h4>5 Stars</h4>
            </span>
          </div>
          <p>Excellent food, great service. I'll come back again!</p>
        </div>
        <div className="card">
          <div id="cardHeading">
            <img src={Richelle}></img>
            <span>
              <h4>
                <b>RiChelle O.</b>
              </h4>
              <h4>5 Stars</h4>
            </span>
          </div>
          <p>
            Little Lemon accomidated all our requests for my 40th. The lemon
            cake is amazing!
          </p>
        </div>
        <div className="card">
          <div id="cardHeading">
            <img src={Monique}></img>
            <span>
              <h4>
                <b>Monique P.</b>
              </h4>
              <h4>5 stars</h4>
            </span>
          </div>
          <p>Great food! Friendly service! Amazing atmostphere.</p>
        </div>
      </div>
    </div>
  );
}
