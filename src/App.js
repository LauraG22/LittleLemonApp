import "./App.css";
import Home from "./Home.js";
import BookingPage from "./BookingPage.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmedBooking />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
