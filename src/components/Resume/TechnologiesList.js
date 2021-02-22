import React from "react";
import Bar from "../Bar";
import FrameworksList from "./FrameworksList";
import LanguagesList from "./LanguagesList";

const TechnologiesList = ({
  languages,
  frameworks,
  databasesCMC,
  testingCloud,
}) => {
  return (
    <div className="row">
      <LanguagesList languages={languages} />
      <FrameworksList frameworks={frameworks} />

      <div className="col-lg-6 resume-languages">
        <h5 className="resume-language__heading">Databases and CMC</h5>
        <div className="resume-language__body mt-3">
          {databasesCMC.map((database) => (
            <Bar key={database.name} value={database} />
          ))}
        </div>
      </div>
      <div className="col-lg-6 resume-languages">
        <h5 className="resume-language__heading">
          Testing and Cloud Application Platform
        </h5>
        <div className="resume-language__body mt-3">
          {testingCloud.map((testing) => (
            <Bar key={testing.name} value={testing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesList;
