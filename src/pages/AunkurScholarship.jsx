import React from "react";
import Header from "../components/aunkurScholarship/Header";
// import EnrollmentTimer from "../components/EnrollmentTimer";
import AunkurSyllabus from "../components/home/AunkurSyllabus";
import ApplicationSteps from "../components/aunkurScholarship/ApplicationSteps";
import Eligibility from "../components/aunkurScholarship/Eligibility";
import ApplicationCalendar from "../components/aunkurScholarship/ApplicationCalendar";
import EvaluationAndSelection from "../components/aunkurScholarship/EvaluationAndSelection";
import FAQ from "../components/aunkurScholarship/FAQ";
import Timer from "../components/aunkurScholarship/Timer";

const AunkurScholarship = () => {
  return (
    <div>
      <Header />
      <Timer />
      <AunkurSyllabus />
      <ApplicationSteps />
      <Eligibility />
      <ApplicationCalendar />
      <EvaluationAndSelection />
      <FAQ />
    </div>
  );
};

export default AunkurScholarship;
