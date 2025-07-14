import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TopNavBar from "../components/shared/TopNavBar";

const Layout = () => {
  return (
    <div className="font-siliguri">
      {/* Top Navbar */}
      <TopNavBar></TopNavBar>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        {" "}
        <Outlet></Outlet>{" "}
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
