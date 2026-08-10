import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/responsive.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
