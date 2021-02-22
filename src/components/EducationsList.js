import React from "react";
import Education from "./Education";

export const EducationsList = ({ educations }) => {
  return (
    <div className="col-lg-12 resume-card">
      <h4 className="resume-card__heading">Education</h4>
      {educations.map((education) => {
        return <Education education={education} key={education.id} />;
      })}
    </div>
  );
};
