import { FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../../providers/AuthProvider";
import useApplication from "../../hooks/useApplication";
import { useContext } from "react";
const ProfileSummary = () => {
  const { user } = useContext(AuthContext);
  const [application] = useApplication();
  return (
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
            <p className="text-gray-500">
              My Applications: {application?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
