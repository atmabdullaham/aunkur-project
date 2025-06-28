import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const Registration = () => {
  return (
    <div>
      <p className="text-center bg-[#E5FFF5]  rounded-[6px] max-w-4xl p-1 mb-3 mt-3 mx-auto">
        ফরম পূরণ করে তোমার সিট বুকিং করে নাও।
      </p>
      <div className="flex items-center justify-center">
        {/* Registration form component can be added here */}
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
