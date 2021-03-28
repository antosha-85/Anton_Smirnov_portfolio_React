import React from "react";

const Education = ({ education }) => {
  return (
    <div className="resume-card__body">
      <h5 className="resume-card__title">{education.title}</h5>
      <p className="resume-card__name">{education.name}</p>
    </div>
  );
};

export default Education;
