import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import useApplication from "../hooks/useApplication";
import { Link, Outlet } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [application] = useApplication();
  console.log(application);
  return (
    <div className="min-h-screen bg-[#39e1a7] text-white p-4 space-y-6 md:space-y-0 md:flex md:gap-6">
      {/* Sidebar (Top on mobile) */}
      <div className="bg-[#132720] rounded-xl p-4 w-full md:w-1/3">
        <div className="flex flex-col items-center text-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-400 mb-2"
          />
          <h2 className="font-semibold text-lg">{user?.displayName}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>

        {/* Sidebar Navigation */}
        <ul className="mt-6 space-y-2 text-sm">
          <li>
            <Link
              to="/profile"
              className="btn flex items-center justify-between bg-[#0D1B16] rounded-md p-3 border-l-4 border-green-500 text-white"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="my-registration"
              className="btn flex items-center justify-between bg-[#0D1B16] rounded-md p-3 border-l-4 border-green-500 text-white"
            >
              My Registration
              <div className="badge badge-sm badge-secondary">
                {application.length}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="admitcard"
              className="btn flex items-center justify-between bg-[#0D1B16] rounded-md p-3 border-l-4 border-green-500 text-white"
            >
              Admit Card
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile Details Section */}
      <div className="bg-[#132720] rounded-xl p-4 w-full md:w-2/3 space-y-6">
        <div>
          <Outlet /> {/* This will render nested components */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
