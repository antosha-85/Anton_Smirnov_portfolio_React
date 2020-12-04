import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";

const languages = [
  {
    icon: react,
    name: "JavaScript",
    level: "",
  },
  {
    icon: react,
    name: "Ruby",
    level: "",
  },
  {
    icon: react,
    name: "HTML",
    level: "",
  },
];

const tools = [
  {
    icon: react,
    name: "React",
    level: "",
  },
  {
    icon: react,
    name: "Node",
    level: "",
  },
  {
    icon: react,
    name: "Ruby on Rails",
    level: "",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
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
          <div className="resume-language__body">
            {languages.map((language) => (
              <Bar language={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and softwares</h5>
          <div className="resume-language__body">
            {tools.map((tool) => (
              <Bar tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
