import Banner from "../components/home/Banner";
import AunkurSyllabus from "../components/home/AunkurSyllabus";

import HowToApply from "../components/home/HowToApply";
import SuccessStatistics from "../components/home/SuccessStatistics";
import WhyScholarshipProject from "../components/home/WhyScholarshipProject";
import EnrollmentTimer from "../components/home/EnrollmentTimer";
import StudentOfTheYear from "../components/home/StudentOfTheYear";
import ChairmanMessage from "../components/home/ChairmanMessage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Section for Aunkur application Countdown */}
      <EnrollmentTimer></EnrollmentTimer>
      {/* How to Apply Section */}
      <HowToApply></HowToApply>
      {/* Why Scholarship Project */}
      <WhyScholarshipProject></WhyScholarshipProject>
      {/* Aunkur Syllabus */}
      <AunkurSyllabus></AunkurSyllabus>
      {/* Successs Statistics */}
      <SuccessStatistics></SuccessStatistics>
      {/* Aunkur Student of the Year */}
      <StudentOfTheYear></StudentOfTheYear>
      {/* Chairman's Message */}
      <ChairmanMessage></ChairmanMessage>
    </div>
  );
};

export default Home;
