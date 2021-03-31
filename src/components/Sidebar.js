import React from "react";
import linkedIn from "../assets/icons/icons8-linkedin.svg";
import github from "../assets/icons/icons8-github.svg";
import antonImage from "../assets/avatar/Anton.jpg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/icons8-place-marker-24.png";
import resume from "../assets/Anton Smirnov-IT-Resume.pdf";
import { motion } from "framer-motion";
import "./css/sidebar.css";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:antonSmirnovVlad@gmail.com");
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
  if (window.innerWidth >= 992) {
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
          Full Stack Web Developer
        </div>
        <a href={resume} download="Resume Anton Smirnov">
          <div className="sidebar__item sidebar__resume">
            <img src={tie} alt="resume" className="sidebar__icon" />
            Download Resume
          </div>
        </a>
        <figure className="sidebar__social-icons my-2">
          <a
            href="https://www.linkedin.com/in/as8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" className="sidebar__icon" />
          </a>
        </figure>
        <div className="sidebar__contact">
          <div className="sidebar__item sidebar__github">
            <a href="https://github.com/antosha-85" target="_blank"
            rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="sidebar__icon mr-2" />
              GitHub
            </a>
          </div>
          <div className="sidebar__item sidebar__location">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Calgary,
              +AB/@51.0277202,-114.368015,10z/data=!3m1!4b1!4m5!
              3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!
              3d51.0447331!4d-114.0718831"
            >
              <img src={pin} alt="location" className="sidebar__icon" />{" "}
              Calgary, Canada
            </a>
          </div>
          <div className="sidebar__item sidebar__email_info">
            antonSmirnovVlad@gmail.com
          </div>
          <div className="sidebar__item sidebar__phone">+1(306)250-58-61</div>
        </div>
        <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
          Email me
        </div>
      </motion.div>
    );
  } else {
    return (
      <div
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/as8/"
          >
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Montreal,+QC/@45.5581968,-73.8703851,11z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5016889!4d-73.567256"
            >
              <img src={pin} alt="location" className="sidebar__icon" />{" "}
              Montreal, Canada
            </a>
          </div>
          <div className="sidebar__item sidebar__email_info">
            antosha19851985@gmail.com
          </div>
          <div className="sidebar__item sidebar__phone">+1(306)250-58-61</div>
        </div>
        <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
          Email me
        </div>
      </div>
    );
  }
};

export default Sidebar;
