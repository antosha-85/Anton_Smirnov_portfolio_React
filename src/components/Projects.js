import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import data_projects from "./projects_data/projects_data";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);

  const handleFilter = (name) => {
    const updatedProjects = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(updatedProjects);
  };
  return (
    <div className="container projects">
      <div className="projects__navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={() => handleFilter("React")}>React</div>
        <div onClick={() => handleFilter("Redux")}>Redux</div>
        <div onClick={() => handleFilter("Firebase")}>Firebase</div>
        <div onClick={() => handleFilter("JavaScript")}>Vanilla JS</div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
