import BookingForm from "./BookingForm.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Api from "./api";
import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer.js";
function setAvailableTimes() {
  return Api().fetchAPI(Date.now());
}

function initializeAvailableTimes() {
  return Api().fetchAPI(Date.now());
}

function BookingPage() {
  const [bookingTime, setBookingTime] = useState("");
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    setAvailableTimes,
    initializeAvailableTimes()
  );
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const result = Api().submitAPI({ time: bookingTime, date: Date.now() });
    console.log("RESULT:", result);
    if (result) {
      console.log("FORM DATA", bookingTime);
      navigate("/confirmation");
    } else {
    }
  };
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
        submitForm={submitForm}
      />
      <Footer />
    </>
  );
}

export default BookingPage;
