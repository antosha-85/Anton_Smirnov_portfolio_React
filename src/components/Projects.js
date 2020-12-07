import React from 'react'
import ProjectCard from './ProjectCard'
import data_projects from './projects_data/projects_data'


const Projects = () => {
    return (
        <div className="container projects">
            <div className="row">
                {data_projects.map(project => (
                    <ProjectCard key={project.name} project={project}/>
                ))
                }
            </div>
        </div>
    )
}

export default Projects
