import Richelle from "./Richelle.jpg";
import Tommy from "./Tommy.jpg";
import Monique from "./Monique.jpg";
export default function Testimonials() {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonials">
        <div className="card">
          <img src={Tommy}></img>

          <div className="container">
            <h4>
              <b>Tommy B.</b>
            </h4>
            <h4>5 Stars</h4>
            <p>Excellent food, great service. I'll come back again!</p>
          </div>
        </div>
        <div className="card">
          <img src={Richelle}></img>

          <div className="container">
            <h4>
              <b>RiChelle O.</b>
            </h4>
            <h4>5 Stars</h4>
            <p>
              Great service! We celebrated my 50th birthday with several
              friends. Little Lemon accomidated all our requests. The lemon cake
              is amazing!
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Monique}></img>

          <div className="container">
            <h4>
              <b>Monique P.</b>
            </h4>
            <h4>5 stars</h4>
            <p>Great food! Amazing atmostphere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
