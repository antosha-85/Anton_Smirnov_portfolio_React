import React from "react";
import linkedIn from "../assets/icons/icons8-linkedin.svg";
import github from "../assets/icons/icons8-github.svg";
import antonImage from "../assets/avatar/Anton.jpg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/icons8-place-marker-24.png";
import resume from "../assets/Resume Anton Smirnov.pdf";
import { motion } from "framer-motion";
import "./css/sidebar.css";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:antosha19851985@gmail.com");
  };

  const sidebar_animation = {
    initial: {
      x: "-20vw",
    },
    animate: {
      x: "0",
      transition: {
        delay: 0.2,
        duration: 1,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_animation}
      initial="initial"
      animate="animate"
    >
      <img src={antonImage} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Anton <span>Smirnov</span>
      </div>
      <div className="sidebar__item sidebar__title">
        Front End Web Developer
      </div>
      <a href={resume} download="Resume Anton Smirnov">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.linkedin.com/in/as8/">
          <img src={linkedIn} alt="LinkedIn" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/antosha-85">
            <img src={github} alt="GitHub" className="sidebar__icon mr-2" />
            GitHub
          </a>
        </div>
        <div className="sidebar__item sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon" /> Montreal,
          Canada
        </div>
        <div className="sidebar__item">antosha19851985@gmail.com</div>
        <div className="sidebar__item">+1(306)250-58-61</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
