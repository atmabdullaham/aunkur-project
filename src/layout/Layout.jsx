import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import TopNavBar from "../components/shared/TopNavBar";

const Layout = () => {
  const location = useLocation();
  const login = location.pathname.includes("login");
  const signup = location.pathname.includes("signup");
  return (
    <div className="font-siliguri">
      {/* Top Navbar */}
      {login || signup || <TopNavBar></TopNavBar>}
      {/* Navbar */}
      {login || signup || <Navbar></Navbar>}
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      {login || signup || <Footer></Footer>}
    </div>
  );
};

export default Layout;
