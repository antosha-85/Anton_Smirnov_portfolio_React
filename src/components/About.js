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
            experience in web production projects, startups, and big companies.
            I am a motivated and energetic individual who likes to solve tricky
            problems and resolve code bugs. Passionate about producing great
            user experiences with a customer-first attitude.
          </h6>
          <div className="container about__container">
            <h5 className="about__heading">What I offer</h5>
            <div className="row">
              {skills.map((skill) => (
                <Skillcard
                  key={skill.id}
                  about={skill.about}
                  title={skill.title}
                  icon={skill.icon}
                />
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
            I'm a Full Stack Web Developer with an emphasis on React and
            experience in web production projects, startups, and big companies.
            I am a motivated and energetic individual who likes to solve tricky
            problems and resolve code bugs. Passionate about producing great
            user experiences with a customer-first attitude.
          </h6>
          <div className="container about__container">
            <h5 className="about__heading">What I offer</h5>
            <div className="row">
              {skills.map((skill) => (
                <Skillcard
                  key={skill.id}
                  about={skill.about}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default About;
