import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              {/* Navbar */}
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
