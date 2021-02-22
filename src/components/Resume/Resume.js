import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  frameworks,
  languages,
  databasesCMS,
  testingCloud,
  educations,
  experiences,
} from "../projects_data/resume_data";
import "../css/resume.css";
import EducationsList from "./EducationsList";
import ExperienceList from "./ExperienceList";
import TechnologiesList from "./TechnologiesList";

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
    <>
      <Helmet>
        <title>Resume Anton Smirnov</title>
        <meta
          name="Resume Anton Smirnov"
          description="Resume of Anton Smirnov, React Developer"
        />
      </Helmet>
      <motion.div
        className="container resume"
        variants={resume_animation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <EducationsList educations={educations} />
        <ExperienceList experiences={experiences} />
        <TechnologiesList
          languages={languages}
          frameworks={frameworks}
          databasesCMS={databasesCMS}
          testingCloud={testingCloud}
        />
      </motion.div>
    </>
  );
};

export default Resume;
