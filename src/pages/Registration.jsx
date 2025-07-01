import { useState } from "react";
import RegistrationForm from "../components/RegistrationForm";
import RegistrationStepsTimeline from "../components/RegistrationStepsTimeline";
import Payment from "../components/Payment";
import axios from "axios";

const Registration = () => {
  const [formData, setFormData] = useState(null); // Stores form submission data
  const [formSubmitted, setFormSubmitted] = useState(false); // Controls form visibility
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Controls payment visibility

  // Handler when form is successfully submitted
  const handleFormSubmit = (data) => {
    setFormData(data);
    setFormSubmitted(true);
  };

  // Handler when payment is successful
  const handlePaymentSuccess = async (paymentData) => {
    setPaymentSuccess(true);

    // Combine both registration and payment data
    const finalSubmission = {
      ...formData,
      ...paymentData,
      submittedAt: new Date().toISOString(),
    };
    console.log(finalSubmission);

    // try {
    //   await axios.post("/api/submit", finalSubmission);
    //   // Optionally show success message or redirect
    //   alert("Registration and payment successful!");
    // } catch (error) {
    //   console.error("Failed to save data:", error);
    //   alert("Something went wrong. Please try again.");
    // }
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
        {/* Show Registration Form initially */}
        {!formSubmitted && <RegistrationForm onSubmit={handleFormSubmit} />}

        {/* Show Payment component after form submission */}
        {formSubmitted && !paymentSuccess && (
          <Payment onSuccess={handlePaymentSuccess} />
        )}
      </div>
    </div>
  );
};

export default Registration;
