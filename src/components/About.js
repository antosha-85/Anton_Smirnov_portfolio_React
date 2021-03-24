import React from "react";
import { Helmet } from "react-helmet-async";
import Skillcard from "./Skillcard";
import { motion } from "framer-motion";
import skills from "./projects_data/skills_data";
import "./css/about.css";

const About = () => {
  const about_animation = {
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
  if (window.innerWidth >= 992) {
    return (
      <>
        <Helmet>
          <title>Portfolio Anton Smirnov</title>
          <meta
            name="Portfolio Anton Smirnov"
            description="Portfolio for Anton Smirnov, React Developer"
          />
        </Helmet>
        <motion.div
          className="about"
          variants={about_animation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h6 className="about__intro">
            I'm a Full Stack Web Developer with an emphasis on React and
            experience in small web production projects and a startup doing
            sites for local clients. I am a motivated and energetic individual
            who likes to solve tricky problems and resolve code bugs. Passionate
            about producing great user experiences with a customer-first
            attitude. During my last assignment role, I helped the company stay
            organized and save up to 21% of productive time, which translated
            into an additional 77% of revenue for the company and up to 80% for
            the clients.
          </h6>
          <div className="container about__container">
            <h5 className="about__heading">What I offer</h5>
            <div className="row">
              {skills.map((skill) => (
                <Skillcard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <title>Portfolio Anton Smirnov</title>
          <meta
            name="Portfolio Anton Smirnov"
            description="Portfolio for Anton Smirnov, React Developer"
          />
        </Helmet>
        <div>
          <h6 className="about__intro">
            I'm a Front End Web Developer with an emphasis on React and
            experience in small web production projects and a startup doing
            sites for local clients. I am a motivated and energetic individual
            who likes to solve tricky problems and resolve code bugs. Passionate
            about producing great user experiences with a customer-first
            attitude. During my last assignment role, I helped the company stay
            organized and save up to 21% of productive time, which translated
            into an additional 77% of revenue for the company and up to 80% for
            the clients.
          </h6>
          <div className="container about__container">
            <h5 className="about__heading">What I offer</h5>
            <div className="row">
              {skills.map((skill) => (
                <Skillcard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default About;
