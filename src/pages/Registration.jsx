import { useState } from "react";
import RegistrationStepsTimeline from "../components/registration/RegistrationStepsTimeline";
import RegistrationForm from "../components/registration/RegistrationForm";

import RegistrationFee from "../components/registration/RegistrationFee";
import axios from "axios";

const Registration = () => {
  const [feeData, setFeeData] = useState(null); // Stores payment data
  const [formSubmitted, setFormSubmitted] = useState(false); // Controls form visibility
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Controls payment visibility

  console.log(feeData);

  // Handler when payment is successful
  const handlePaymentSuccess = (paymentData) => {
    setFeeData(paymentData);
    setPaymentSuccess(true);
  };

  // Handler when form is successfully submitted
  const handleFormSubmit = async (data) => {
    setFormSubmitted(true);
    const finalSubmission = {
      ...feeData,
      ...data,
      submittedAt: new Date().toISOString(),
    };
    console.log("Final Submission Data:", finalSubmission);
    // Combine both registration and payment data

    try {
      await axios
        .post("http://localhost:5000/application", finalSubmission)
        .then((res) => {
          console.log("Data saved successfully:", res.data);
        });
      // Optionally show success message or redirect
      alert("Registration and payment successful!");
    } catch (error) {
      console.error("Failed to save data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* Step Timeline Component */}
      <RegistrationStepsTimeline
        isFormSubmitted={formSubmitted}
        isPaymentDone={paymentSuccess}
      />

      <p className="text-center bg-[#E5FFF5] rounded-[6px] max-w-4xl p-1 mb-3 mt-3 mx-auto">
        ফরম পূরণ করে তোমার সিট বুকিং করে নাও।
      </p>

      <div className="flex flex-col items-center justify-center">
        {/* Show Payment component after form submission */}
        {!paymentSuccess && (
          // <Payment onSuccess={handlePaymentSuccess} />
          <RegistrationFee onSuccess={handlePaymentSuccess}></RegistrationFee>
        )}
        {/* Show Registration Form initially */}
        {paymentSuccess && !formSubmitted && (
          <RegistrationForm onSubmit={handleFormSubmit} />
        )}
      </div>
    </div>
  );
};

export default Registration;
