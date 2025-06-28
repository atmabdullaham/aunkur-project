import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { div, section, ul } from "motion/react-client";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out");
      })
      .then((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-bold underline" : "text-gray-600"
          }
        >
          হোম
        </NavLink>
      </li>
      <li>
        <Link to="/activities">কার্যক্রম</Link>
      </li>
      <li>
        <Link to="/aunkur-scholarship">অংকুর বৃত্তি</Link>
      </li>
      <li>
        <Link to="/news-blogs">নিউজ ও ব্লগ</Link>
      </li>
      <li>
        <Link to="/calender">ক্যালেন্ডার</Link>
      </li>
      <li>
        <Link to="/library">লাইব্রেরি</Link>
      </li>
      <li>
        <Link to="/quiz">কুইজ</Link>
      </li>
      <li>
        <Link to="/result">ফলাফল</Link>
      </li>
    </>
  );
  return (
    <section className="bg-green-200 sticky top-0 z-50">
      <div className="navbar font-tirobangla font-medium w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn bg-transparent shadow-none border-0">
            <img className="w-30 h-10" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <NavLink className="btn" to="/registration">
            Registration
          </NavLink>
          {!user && (
            <ul>
              {" "}
              <li>
                <Link
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 px-4 rounded-md"
                  to="/login"
                >
                  লগ-ইন
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div title={user?.displayName} className="w-10 rounded-full">
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 rounded-box w-52"
                >
                  <li className="mt-2">
                    <h2>{user?.displayName}</h2>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm border-0 btn-block bg-red-700 text-center text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
