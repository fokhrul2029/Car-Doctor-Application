import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CheckOut from "../pages/CheckOut/CheckOut";
import CardDetails from "../pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-chi-peach.vercel.app/services/${params.id}`),
        element: <CheckOut />,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <CardDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
