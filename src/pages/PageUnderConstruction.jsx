import { Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageUnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <Construction className="w-14 h-14 text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          This Page is Being Built
        </h1>
        <p className="text-gray-600 text-sm">
          We're currently working on this page to bring you a better experience.
          Please check back later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
