import Banner from "../components/home/Banner";
import AunkurSyllabus from "../components/home/AunkurSyllabus";

import HowToApply from "../components/home/HowToApply";
import SuccessStatistics from "../components/home/SuccessStatistics";
import WhyScholarshipProject from "../components/home/WhyScholarshipProject";
import EnrollmentTimer from "../components/home/EnrollmentTimer";

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
      {/* Chairman message */}
    </div>
  );
};

export default Home;
