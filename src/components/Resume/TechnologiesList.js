import React from "react";
import DatabaseCMSList from "./DatabaseCMSList";
import FrameworksList from "./FrameworksList";
import LanguagesList from "./LanguagesList";
import TestingCloudList from "./TestingCloudList";

const TechnologiesList = ({
  languages,
  frameworks,
  databasesCMS,
  testingCloud,
}) => {
  return (
    <div className="row">
      <LanguagesList languages={languages} />
      <FrameworksList frameworks={frameworks} />
      <DatabaseCMSList databasesCMS={databasesCMS} />
      <TestingCloudList testingCloud={testingCloud} />
    </div>
  );
};

export default TechnologiesList;
