import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

import Api from "./api.js";

function setAvailableTimes() {
  return initializeAvailableTimes();
}

function initializeAvailableTimes() {
  return Api().fetchAPI(Date.now());
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
      setBookingTime={initializeAvailableTimes}
      times={setAvailableTimes()}
    />
  );
  expect(screen.getAllByRole("option").length).toBeGreaterThan(0);
});

test("Has validation for number of guests", () => {
  const setBookingTime = jest.fn();
  render(
    <BookingForm
      bookingTime={""}
      setBookingTime={initializeAvailableTimes}
      times={setAvailableTimes()}
    />
  );
  const guests = screen.getAllByRole("spinbutton");
  const min = parseInt(guests[0].getAttribute("min"));
  const max = parseInt(guests[0].getAttribute("max"));

  expect(min).toBe(1);
  expect(max).toBe(10);
});
