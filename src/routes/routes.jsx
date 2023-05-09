import { createBrowserRouter } from "react-router-dom";
import CoffeeLayout from "../layouts/CoffeeLayout";
import Main from "../layouts/Main";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import Home from "../pages/Home/Home/Home";

import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/coffee",
    element: <CoffeeLayout />,
    children: [
      {
        path: "coffee-details",
        element: <CoffeeDetails />,
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
