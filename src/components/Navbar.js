import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    let currentURL = window.location.href;

    if (currentURL.endsWith("/")) {
      setActive("About");
    } else if (currentURL.endsWith("/projects")) {
      setActive("Projects");
    } else if (currentURL.endsWith("/resume")) {
      setActive("Resume");
    }
  }, [active]);

  const navbar_animation = {
    initial: {
      y: "-30vh",
    },
    animate: {
      y: "0",
      transition: {
        delay: 0.2,
        duration: 1,
        type: 'spring'
      }
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={navbar_animation}
      initial="initial"
      animate="animate"
    >
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={() => setActive("About")}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" ? (
          <Link to="/resume">
            <div className="navbar__item" onClick={() => setActive("Resume")}>
              Resume
            </div>
          </Link>
        ) : null}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={() => setActive("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
