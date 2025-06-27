import Banner from "../components/Banner";
import EnrollmentTimer from "../components/EnrollmentTimer";
import SuccessStatistics from "../components/home/SuccessStatistics";
import WhyScholarshipProject from "../components/home/WhyScholarshipProject";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Section for Aunkur application Countdown */}
      <EnrollmentTimer></EnrollmentTimer>
      {/* Why Scholarship Project */}
      <WhyScholarshipProject></WhyScholarshipProject>
      {/* Successs Statistics */}
      <SuccessStatistics></SuccessStatistics>
    </div>
  );
};

export default Home;
