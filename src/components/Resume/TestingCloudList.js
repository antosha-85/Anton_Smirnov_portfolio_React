import React from "react";
import Bar from "../Bar";

const TestingCloudList = ({ testingCloud }) => {
  return (
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
  );
};

export default TestingCloudList;
