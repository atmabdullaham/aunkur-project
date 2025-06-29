import Banner from "../components/Banner";
import EnrollmentTimer from "../components/EnrollmentTimer";
import ChairmanMessage from "../components/home/CharimanMessage";
import HowToApply from "../components/home/HowToApply";
import OurActivities from "../components/home/OurActivities";
import SuccessStatistics from "../components/home/SuccessStatistics";
import WhyScholarshipProject from "../components/home/WhyScholarshipProject";

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
      {/* Successs Statistics */}
      <SuccessStatistics></SuccessStatistics>
      {/* Our activities */}
      <OurActivities></OurActivities>
      {/* Chairman message */}
      <ChairmanMessage></ChairmanMessage>
    </div>
  );
};

export default Home;
