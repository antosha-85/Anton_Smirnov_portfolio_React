import React from "react";
import ExperienceDetailsList from "./ExperienceDetailsList";

const Experience = ({ experience }) => {
  return (
    <div className="col-lg-6 resume-card">
      <div className="resume-card__body">
        <h5 className="resume-card__title">{experience.title}</h5>
        <p className="resume-card__name">{experience.name}</p>
        <p className="resume-card__details">
          <ExperienceDetailsList detailsList={experience.details} />
        </p>
      </div>
    </div>
  );
};

export default Experience;
