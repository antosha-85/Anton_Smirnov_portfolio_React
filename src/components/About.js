import React from "react";
import api from "../assets/icons/api.svg";
import Skillcard from "./Skillcard";
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
      I'm a Front End Web Developer with an emphasis on React and experience in small web production projects and a startup doing sites for local clients. I am a motivated and energetic individual who likes to solve tricky problems and resolve code bugs. Passionate about producing great user experiences with a customer-first attitude. During my last assignment role, I helped the company stay organized and save up to 21% of productive time, which translated into an additional 77% of revenue for the company and up to 80% for the clients.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
