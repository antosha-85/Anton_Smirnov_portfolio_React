import React from "react";
import "./css/bar.css";
const Bar = ({ value: { icon, name, level } }) => {
  const bar_width = `${level}%`;

  return (
    <div className="row">
      <img src={icon} alt="icon" className="bar__icon mr-1" />
      <div className="bar">
        <div className="bar__wrapper" style={{ width: bar_width }}>
          <span className="bar__name">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Bar;
