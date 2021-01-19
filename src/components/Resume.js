import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Bar from "./Bar";
import { motion } from "framer-motion";
import {
  frameworks,
  languages,
  databasesCMC,
  testingCloud,
} from "./projects_data/resume_data";
import "./css/resume.css";

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
    <HelmetProvider>
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
        <div className="row">
          <div className="col-lg-6 resume-card">
            <h4 className="resume-card__heading">Education</h4>
            <div className="resume-card__body">
              <h5 className="resume-card__title">Lighthouse Labs Bootcamp</h5>
              <p className="resume-card__name">
                Bootcamp (Jan 2020 - Apr 2020)
              </p>
              <p className="resume-card__details">
                Finished Full Stack Web Development Bootcamp, Studied
                JavaScript, React, Node, Express, PostgreSQL, Ruby, Ruby on
                Rails
              </p>
            </div>
          </div>
          <div className="col-lg-6 resume-card">
            <h4 className="resume-card__heading">Experience</h4>
            <div className="resume-card__body">
              <h5 className="resume-card__title">Ganin Incorporation</h5>
              <p className="resume-card__name">
                Front End Developer (Feb 2019 - Aug 2019)
              </p>
              <p className="resume-card__details">
                Worked in a team of two developers(myself and a senior
                full-stack developer) using Agile Principles, such as scrum
                meetings and weekly or biweekly review sessions, which helped
                company stay organized and save up to 21% of productive time
                Worked on the front end of multiple sites, was recognized by the
                owner and clients, which translated into an additional 77% of
                revenue for the company and up to 80% for the clients
                <br /> Stack - HTML, CSS, Bootstrap, JavaScript, jQuery, Bitrix
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">Languages</h5>
            <div className="resume-language__body mt-3">
              {languages.map((language) => (
                <Bar value={language} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
              Frameworks and Environment
            </h5>
            <div className="resume-language__body mt-3">
              {frameworks.map((framework) => (
                <Bar value={framework} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">Databases and CMC</h5>
            <div className="resume-language__body mt-3">
              {databasesCMC.map((database) => (
                <Bar value={database} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 resume-languages">
            <h5 className="resume-language__heading">
              Testing and Cloud Application Platform
            </h5>
            <div className="resume-language__body mt-3">
              {testingCloud.map((testing) => (
                <Bar value={testing} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default Resume;
