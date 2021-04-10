import React from "react";
import "./css/skill-card.css";

const Skillcard = ({ icon, title, about }) => {
  return (
    <div className="col-lg-6 mb-3">
      <div className="skill-card">
        <img src={icon} alt="icon" className="skill-card__icon mr-2" />
        <div className="skill-card-body">
          <h5 className="skill-card__title">{title}</h5>
          <p className="skill-card__content" key={about[0]}>
            {about[1]}
            {about[2] ? about[2] : null}
            {about[3] ? about[3] : null}
            {about[4] ? about[4] : null}
            {about[5] ? about[5] : null}
            {about[6] ? about[6] : null}
            {about[7] ? about[7] : null}
            {about[8] ? about[8] : null}
            {about[9] ? about[9] : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
