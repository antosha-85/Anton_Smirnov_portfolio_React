import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
import { motion } from "framer-motion";

const languages = [
  {
    icon: react,
    name: "JavaScript",
    level: "70",
  },
  {
    icon: react,
    name: "Ruby",
    level: "30",
  },
  {
    icon: react,
    name: "HTML",
    level: "80",
  },
];

const tools = [
  {
    icon: react,
    name: "React",
    level: "70",
  },
  {
    icon: react,
    name: "Node",
    level: "50",
  },
  {
    icon: react,
    name: "Ruby on Rails",
    level: "30",
  },
];

const Resume = () => {
  const resume_animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="container resume"
      variants={resume_animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Lighthouse Labs Bootcamp</h5>
            <p className="resume-card__name">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              voluptatem.
            </p>
            <p className="resume-card__details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              eveniet autem itaque expedita ea ducimus!
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Ganin Incorporation</h5>
            <p className="resume-card__name">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
              voluptatem.
            </p>
            <p className="resume-card__details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              eveniet autem itaque expedita ea ducimus!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
