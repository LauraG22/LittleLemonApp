import Mario from "./MarioAndAdrianA.jpg";

export default function About() {
  return (
    <div id="about">
      <img src={Mario}></img>
      <div class="card">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively, but casual environment. The
          restaurant features a locally sourced menu with daily specials.
        </p>
      </div>
    </div>
  );
}
