import React from "react";
import Experience from "./Experience";

const ExperiencesList = ({ experiences }) => {
  return (
    <>
      <h4 className="resume-card__heading">Experience</h4>
      <div className="row">
        {experiences.map((experience) => {
          return <Experience experience={experience} key={experience.id} />;
        })}
      </div>
    </>
  );
};

export default ExperiencesList;
