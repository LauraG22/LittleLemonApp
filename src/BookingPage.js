import BookingForm from "./BookingForm.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import { useState, useReducer } from "react";

import Footer from "./Footer.js";
const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
function setAvailableTimes() {
  console.log("DISPATCH CALLED");
  return times;
}

function initializeAvailableTimes() {
  return times;
}

function BookingPage() {
  const [bookingTime, setBookingTime] = useState("");
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    setAvailableTimes,
    initializeAvailableTimes()
  );
  //console.log("INITIALIZED TIMES:", initializeAvailableTimes());
  return (
    <>
      <Nav />
      <Header />
      <BookingForm
        bookingTime={bookingTime}
        setBookingTime={setBookingTime}
        dispatchAvailableTimes={dispatchAvailableTimes}
        times={availableTimes}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
