import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/pages/home/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
