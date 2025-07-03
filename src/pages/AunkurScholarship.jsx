import React from "react";
import Header from "../components/aunkurScholarship/Header";
import EnrollmentTimer from "../components/EnrollmentTimer";
import AunkurSyllabus from "../components/home/AunkurSyllabus";
import ApplicationSteps from "../components/aunkurScholarship/ApplicationSteps";

const AunkurScholarship = () => {
  return (
    <div>
      <Header />
      <EnrollmentTimer />
      <AunkurSyllabus />
      <ApplicationSteps />
    </div>
  );
};

export default AunkurScholarship;
