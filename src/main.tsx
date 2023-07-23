import React from "react";
import ReactDOM from "react-dom/client";
//
import "./index.css";
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//
import App from "./App.tsx";
import Admin from "./Admin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/minad",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
