import React from "react";
import Bar from "../Bar";

const LanguagesList = ({ languages }) => {
  return (
    <div className="col-lg-6 resume-languages">
      <h5 className="resume-language__heading">Languages</h5>
      <div className="resume-language__body mt-3">
        {languages.map((language) => (
          <Bar key={language.name} value={language} />
        ))}
      </div>
    </div>
  );
};

export default LanguagesList;
