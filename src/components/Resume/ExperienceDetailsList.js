import React from "react";
import ExperienceDetail from "./ExperienceDetail";

const ExperienceDetailsList = ({ detailsList }) => {
  return (
    <>
      {detailsList.map((detail) => {
        return <ExperienceDetail detail={detail.detail} key={detail.id} />;
      })}
    </>
  );
};

export default ExperienceDetailsList;
