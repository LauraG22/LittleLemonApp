import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

export default function ConfirmedBooking() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <p id="confirmation">
          Your table reservation is confirmed. We look forward to seeing you
          soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
