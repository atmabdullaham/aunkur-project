import Banner from "../components/Banner";
import EnrollmentTimer from "../components/EnrollmentTimer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* Section for Aunkur application Countdown */}
      <EnrollmentTimer></EnrollmentTimer>
    </div>
  );
};

export default Home;
