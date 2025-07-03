import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopNavBar from "../components/TopNavBar";

const Layout = () => {
  return (
    <div>
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
