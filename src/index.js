import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/css/projects.css";
import "./components/css/bar.css";
import "./components/css/resume.css";
import "./components/css/skill-card.css";
import "./components/css/about.css";
import "./components/css/navbar.css";
import "./components/css/sidebar.css";
import "./components/css/projects_navbar.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
