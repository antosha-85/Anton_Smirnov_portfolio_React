import React from "react";
import "./css/skill-card.css"

const Skillcard = ({ skill:{icon, title, about,id} }) => {
  return (
    <div className="col-lg-6 mb-3">
      <div className="skill-card">
        <img src={icon} alt="icon" className="skill-card__icon mr-2"  />
        <div className="skill-card-body">
          <h6 className="skill-card__title">{title}</h6>
          <p className="skill-card__content">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
