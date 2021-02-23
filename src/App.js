import React from "react";
import Navbar from "./components/Navbar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const location = useLocation();
  return (
    <HelmetProvider>
      <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3 px-lg-2 px-0 padding__bottom">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content margin__bottom">
              <Navbar />
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
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
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
