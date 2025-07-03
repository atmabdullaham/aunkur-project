import React from "react";
import Header from "../components/aunkurScholarship/Header";
import EnrollmentTimer from "../components/EnrollmentTimer";
import AunkurSyllabus from "../components/home/AunkurSyllabus";
import ApplicationSteps from "../components/aunkurScholarship/ApplicationSteps";
import Eligibility from "../components/aunkurScholarship/Eligibility";
import ApplicationCalendar from "../components/aunkurScholarship/ApplicationCalendar";
import EvaluationAndSelection from "../components/aunkurScholarship/EvaluationAndSelection";
import FAQ from "../components/aunkurScholarship/FAQ";

const AunkurScholarship = () => {
  return (
    <div>
      <Header />
      <EnrollmentTimer />
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
