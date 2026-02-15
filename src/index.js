import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import App from "./App";
import "./index.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider dir="rtl">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
