import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Payment from "../components/Payment";
import { useState } from "react";

const Registration = () => {
  const [isFillup, setisFillup] = useState(false);
  const [isPayment, setisPayment] = useState(false);
  return (
    <div>
      <p className="text-center bg-[#E5FFF5]  rounded-[6px] max-w-4xl p-1 mb-3 mt-3 mx-auto">
        ফরম পূরণ করে তোমার সিট বুকিং করে নাও।
      </p>
      <div className="flex flex-col items-center justify-center">
        {/* Registration form component can be added here */}
        <RegistrationForm setisFillup={setisFillup} isFillup={isFillup} />
        <Payment isFillup={isFillup}></Payment>
      </div>
    </div>
  );
};

export default Registration;
