import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

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
              <Switch>
                <Route path="/" exact>
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/"></Redirect>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
