import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../screens/Main";
import ShoppingList from "../screens/ShoppingList";

export default function Routes() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/shopping-list",
    element: <ShoppingList/>
  },
]);
