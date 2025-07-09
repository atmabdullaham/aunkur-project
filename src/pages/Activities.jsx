import React from "react";
import PageUnderConstruction from "./PageUnderConstruction";
import OurActivitiesBanner from "../components/Activities/OurActivitiesBanner";
import OurActivities from "../components/Activities/OurActivities";
import ActivitiesVideos from "../components/Activities/ActivitiesVideos.Jsx";

const Activities = () => {
  return (
    <div>
      <OurActivitiesBanner />
      <OurActivities />
      <ActivitiesVideos />
    </div>
  );
};

export default Activities;
