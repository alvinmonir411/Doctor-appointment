import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { RouterProvider } from "react-router";
import { route } from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>
);
