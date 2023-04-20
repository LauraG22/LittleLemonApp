import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Testimonials from "./Testimonials.js";
import About from "./About.js";
import Footer from "./Footer.js";

function App() {
  // <Routes>
  //    <Route path="/" element={<HomePage />}></Route>
  //   <Route path="/booking" element={<BookingPage />}></Route>
  // </Routes>;
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

export default App;
