import React from "react";
import linkedIn from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import mightycoder from "../assets/mighty-coder.svg";
import tie from "../assets/icons/tie.svg";
import pin from "../assets/icons/pin.svg";
import resume from "../assets/Resume Anton Smirnov.pdf";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:antosha19851985@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
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
        <a href="">
          <img src={linkedIn} alt="LinkedIn" className="sidebar__icon mr-3" />
        </a>
        <a href="">
          <img src={github} alt="GitHub" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="">
            <img src={github} alt="GitHub" className="sidebar__icon mr-3" />
            GitHub
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />{" "}
          Montreal, Canada
        </div>
        <div className="sidebar__itme">antosha19851985@gmail.com</div>
        <div className="sidebar__itme">+1(306)250-58-61</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email me
      </div>
    </div>
  );
};

export default Sidebar;
