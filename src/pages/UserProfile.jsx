import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
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

          <div className="w-full bg-gray-700 h-2 rounded-full mb-1">
            <div className="bg-green-400 h-2 rounded-full w-[71%]"></div>
          </div>
          <p className="text-sm text-green-400">Complete your profile – 71%</p>
        </div>

        {/* Sidebar Navigation */}
        <ul className="mt-6 space-y-2 text-sm">
          {["My Profile", "Additional Info", "Address", "Education"].map(
            (label, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-[#0D1B16] rounded-md p-3 border-l-4 border-green-500"
              >
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-green-400" />
                  {label}
                </div>
                <span className="text-green-400">✔</span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Profile Details Section */}
      <div className="bg-[#132720] rounded-xl p-4 w-full md:w-2/3 space-y-6">
        <div>
          <h3 className="text-lg text-green-400 font-semibold mb-4">
            My Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <p className="text-gray-500">Full Name</p>
              <p className="font-medium text-white">{user?.displayName}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium text-white">{user?.email}</p>
            </div>

            <div>
              <p className="text-gray-500">Mobile Number</p>
              <p className="font-medium text-white"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
