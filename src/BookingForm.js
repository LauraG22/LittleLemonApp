import { useState } from "react";
import AvailableTimes from "./AvailableTimes";
export default function BookingForm(props) {
  const [bookingDate, setBookingDate] = useState("");
  //const [bookingTime, setBookingTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [occasion, setOccasion] = useState({
    value: "",
    isTouched: false,
  });

  function handleBookingDateChange(e) {
    setBookingDate(e.target.value);
    props.dispatchAvailableTimes({ type: "changed_date" });
    console.log("BOOKING DATE:", bookingDate);
  }
  function handleBookingTimeChange(e) {
    props.dispatchAvailableTimes(e.target.value);
    console.log("BOOKING TIME:", props.bookingTime);
  }
  function handleBookingGuestsChange(e) {
    setNumberOfGuests(e.target.value);
    console.log("NUMBER OF GUESTS:", numberOfGuests);
  }
  function handleOccasionChange(e) {
    setOccasion(e.target.value);
    console.log("OCCASION:", occasion);
  }

  return (
    <form
      style={{ display: "grid", maxWidth: 200, gap: 20, margin: 25 }}
      onSubmit={props.submitForm}
    >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleBookingDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={handleBookingTimeChange}>
        <AvailableTimes data={props.times} />
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        onChange={handleBookingGuestsChange}
        placeholder={1}
        min={1}
        max={10}
        id="guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>None</option>
      </select>
      <input type="submit" defaultValue="Make Your reservation" />
    </form>
  );
}
