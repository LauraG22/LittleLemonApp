import { useState, useEffect } from "react";
import AvailableTimes from "./AvailableTimes";

export default function BookingForm(props) {
  const [bookingDate, setBookingDate] = useState("");
  //const [bookingTime, setBookingTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [occasion, setOccasion] = useState({
    value: "",
    isTouched: false,
  });

  function handleBookingDateChange(e) {
    setBookingDate(e.target.value);
    props.dispatchAvailableTimes({ type: "changed_date" });
    validateFormValues();
  }
  function handleBookingTimeChange(e) {
    props.setBookingTime(e.target.value);
    validateFormValues();
  }
  function handleBookingGuestsChange(e) {
    setNumberOfGuests(e.target.value);
    validateFormValues();
  }
  function handleOccasionChange(e) {
    setOccasion({ value: e.target.value, isTouched: true });
    validateFormValues();
  }

  function validateFormValues() {
    let isValid = false;

    if (bookingDate && props.bookingTime && numberOfGuests && occasion.value) {
      isValid = true;
    }

    if (isValid) {
      return setIsDisabled(false);
    }
  }
  useEffect(() => {
    validateFormValues();
  }, [bookingDate, props.bookingTime, numberOfGuests, occasion]);

  return (
    <form
      style={{ display: "grid", maxWidth: 200, gap: 20, margin: 25 }}
      onSubmit={props.submitForm}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        onChange={handleBookingDateChange}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={handleBookingTimeChange} required>
        <AvailableTimes data={props.times} />
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        onChange={handleBookingGuestsChange}
        placeholder={2}
        min={1}
        max={10}
        id="guests"
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={handleOccasionChange} defaultValue="None">
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>None</option>
      </select>
      <input
        aria-label="On Click"
        type="submit"
        id="submit"
        disabled={isDisabled}
      />
    </form>
  );
}
