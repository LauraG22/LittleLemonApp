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
