import React from "react";
import ExperienceDetail from "./ExperienceDetail";

const ExperienceDetailsList = ({ detailsList, id }) => {
  return (
    <>
      {detailsList.map((detail) => {
        return <ExperienceDetail detail={detail.detail} key={id}/>;
      })}
    </>
  );
};

export default ExperienceDetailsList;
