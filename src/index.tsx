import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContext } from "./context/ToastContext";
import { Home } from "./Home";
import { Dashboard } from "./dashboard/Dashboard";
import Login from "./admin/Login";
import { AdminDashboard } from "./admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  { path: "home", element: <Home /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "admin", element: <Login /> },
  { path: "admin-dashboard", element: <AdminDashboard /> },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContext />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
