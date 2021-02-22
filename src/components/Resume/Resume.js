import React from "react";
import { Helmet } from "react-helmet-async";
import Bar from "../Bar";
import { motion } from "framer-motion";
import {
  frameworks,
  languages,
  databasesCMC,
  testingCloud,
  educations,
  experiences,
} from "../projects_data/resume_data";
import "../css/resume.css";
import EducationsList from "./EducationsList";
import ExperienceList from "./ExperienceList";

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
        <div className="row">
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">Languages</h5>
            <div className="resume-language__body mt-3">
              {languages.map((language) => (
                <Bar key={language.name} value={language} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
              Frameworks and Environment
            </h5>
            <div className="resume-language__body mt-3">
              {frameworks.map((framework) => (
                <Bar key={framework.name} value={framework} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">Databases and CMC</h5>
            <div className="resume-language__body mt-3">
              {databasesCMC.map((database) => (
                <Bar key={database.name} value={database} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
              Testing and Cloud Application Platform
            </h5>
            <div className="resume-language__body mt-3">
              {testingCloud.map((testing) => (
                <Bar key={testing.name} value={testing} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
