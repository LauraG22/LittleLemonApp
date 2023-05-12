import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";

const times = ["03:00"];
function setAvailableTimes() {
  return times;
}

function initializeAvailableTimes() {
  return times;
}

test("Renders the BookingForm heading", () => {
  render(<BookingForm times={setAvailableTimes()} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("Renders available times", () => {
  const setBookingTime = jest.fn();
  render(
    <BookingForm
      bookingTime={""}
      setBookingTime={setBookingTime}
      times={setAvailableTimes()}
    />
  );
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toBeInTheDocument("03:00");
  console.log(timeSelect);
});
