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
      document.getElementById("my_modal_5").showModal();
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
      {/* Modal */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">অভিনন্দন!</h3>
          <p className="py-4">আপনার নিবন্ধন সফলভাবে সম্পন্ন হয়েছে।</p>
          <p className="py-4">
            আপনার প্রদত্ত তথ্য আমাদের সিস্টেমে গ্রহণ করা হয়েছে এবং যাচাই
            প্রক্রিয়া চলমান রয়েছে। আপনি ২৪ ঘণ্টার মধ্যে একটি নিশ্চিতকরণ বার্তা
            পাবেন।
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-green-500 text-white rounded-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Registration;
