import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import Footer from "./Footer.js";
export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}
