import React from "react";
import Experience from "./Experience";

const ExperienceList = ({ experiences }) => {
  return (
    <>
      <h4 className="resume-card__title">Experience</h4>
      <div className="row">
        {experiences.map((experience) => {
          return <Experience experience={experience} key={experience.id} />;
        })}
      </div>
    </>
  );
};

export default ExperienceList;
