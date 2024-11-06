import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Statistic from "./component/statistic/Statistic.jsx";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import Help from "./component/help/Help.jsx";
import Home from "./component/home/Home.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
        loader: () => {
          return fetch("../product.json");
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
