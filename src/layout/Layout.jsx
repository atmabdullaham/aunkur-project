import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
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
