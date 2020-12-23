import React from "react";
import Skillcard from "./Skillcard";
import { motion } from "framer-motion";
import skills from "./projects_data/skills_data";

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

  return (
    <motion.div
      className="about"
      variants={about_animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="about__intro">
        I'm a Front End Web Developer with an emphasis on React and experience
        in small web production projects and a startup doing sites for local
        clients. I am a motivated and energetic individual who likes to solve
        tricky problems and resolve code bugs. Passionate about producing great
        user experiences with a customer-first attitude. During my last
        assignment role, I helped the company stay organized and save up to 21%
        of productive time, which translated into an additional 77% of revenue
        for the company and up to 80% for the clients.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
