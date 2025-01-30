// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/home.css"; // Si usas rutas relativas

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')

);

