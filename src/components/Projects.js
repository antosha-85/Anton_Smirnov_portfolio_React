import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";
import data_projects from "./projects_data/projects_data";
import { motion } from "framer-motion";
import "./css/projects.css";
import "./css/projects_navbar.css";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");
  const handleFilter = (name) => {
    const updatedProjects = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(updatedProjects);
    setActive(name);
  };

  const projects_animation = {
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
        <title>Projects Anton Smirnov</title>
        <meta
          name="Projects Anton Smirnov"
          description="Projects done by Anton Smirnov, React Developer"
        />
      </Helmet>
      <motion.div
        className="container projects"
        variants={projects_animation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="projects__navbar">
          <div
            className={active === "All" ? "projects__navbar-active" : undefined}
            onClick={() => {
              setProjects(data_projects);
              setActive("All");
            }}
          >
            All
          </div>
          <div
            className={
              active === "React" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("React")}
          >
            React
          </div>
          <div
            className={
              active === "Redux" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Redux")}
          >
            Redux
          </div>
          <div
            className={
              active === "Firebase" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Firebase")}
          >
            Firebase
          </div>
          <div
            className={
              active === "JavaScript" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("JavaScript")}
          >
            JavaScript
          </div>
          <div
            className={
              active === "PostgreSQL" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("PostgreSQL")}
          >
            PostgreSQL
          </div>
          <div
            className={
              active === "Node" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Node")}
          >
            Node
          </div>
          <div
            className={
              active === "Material UI" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Material UI")}
          >
            Material_UI
          </div>
          <div
            className={
              active === "Articles" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Articles")}
          >
            Articles
          </div>
          <div
            className={
              active === "Express" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Express")}
          >
            Express
          </div>
          <div
            className={
              active === "JQuery" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("JQuery")}
          >
            JQuery
          </div>
          <div
            className={
              active === "Bootstrap" ? "projects__navbar-active" : undefined
            }
            onClick={() => handleFilter("Bootstrap")}
          >
            Bootstrap
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
