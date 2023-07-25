import React from "react";
import ReactDOM from "react-dom/client";
//
import "./index.css";
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
import App from "./App.tsx";
import Admin from "./Admin.tsx";
import Reports from "./Reports.tsx";
import NotFound from "./NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/minad",
    element: <Admin />,
  },
  {
    path: "/mokshel",
    element: <Reports />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
