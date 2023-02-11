import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App0 from "./App1";
import App1 from "./App0";
import App2 from "./App2";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <br />
    <hr />
    <App1 />
    <br />
    <hr />
    <br />
    <App0 />
    <br />
    <hr />
    <App2 />
    <br />
    <hr />
  </React.StrictMode>
);
