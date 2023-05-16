import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders little lemon landing page", () => {
  render(<App />);
  const elements = screen.getAllByText(/little lemon/i);
  expect(elements[0]).toBeInTheDocument();
});
