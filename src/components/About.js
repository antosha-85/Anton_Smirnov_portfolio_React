import React from "react";
import api from "../assets/icons/api.svg";
import Skillcard from './Skillcard';
const skills = [
  {
    icon: api,
    title: "Lorem ipsum dolor sit",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero.",
  },
  {
    icon: api,
    title: "Lorem ipsum dolor sit",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero.",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, quo?
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
