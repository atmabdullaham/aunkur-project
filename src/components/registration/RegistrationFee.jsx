import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, CreditCard } from "lucide-react";

const RegistrationFee = ({ onSuccess }) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSuccess(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={`border border-green-500 rounded-lg p-4 md:p-8 md:w-4xl mx-auto bg-base-100`}
    >
      <div className="text-center mb-8 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 font-tirobangla">
          রেজিস্ট্রেশন ফি
        </h1>
        <p className="text-gray-600">
          অনুগ্রহ করে সকল তথ্য সঠিকভাবে প্রদান করুন
        </p>
      </div>
      {/* -------------------------------- */}

      {/* Educational Information */}
      <div className="bg-gradient-to-l from-slate-50 to-blue-50p-3 md:p-6 rounded-r-xl border-r-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bkash Number */}
        <div>
          <label className="label">Bkash Number *</label>
          <input
            {...register("bkash_number", {
              required: "Bkash number is required",
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "বাংলাদেশি মোবাইল নম্বর দিন (১১ ডিজিট)",
              },
            })}
            placeholder="Write Bkash Number"
            className="input input-bordered w-full"
          />
          {errors.bkash_number && (
            <p className="text-error">{errors.bkash_number.message}</p>
          )}
        </div>
        {/* Transaction Id */}
        <div>
          <label className="label">Transaction Id *</label>
          <input
            {...register("transaction_Id", {
              required: "Transaction Id is required",
              pattern: {
                value: /^[A-Za-z0-9]{6,15}$/,
                message: "সঠিক Transaction Id দিন",
              },
            })}
            placeholder="Write Transaction Id"
            className="input input-bordered w-full"
          />
          {errors.transaction_Id && (
            <p className="text-error">{errors.transaction_Id.message}</p>
          )}
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 my-6">
        <button
          type="button"
          onClick={() => setAgreedToTerms(!agreedToTerms)}
          className={`
              w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-colors
              ${
                agreedToTerms
                  ? "bg-teal-500 border-teal-500 text-white"
                  : "border-gray-300 hover:border-teal-400"
              }
            `}
        >
          {agreedToTerms && <Check className="w-3 h-3" />}
        </button>
        <div className="text-sm text-gray-600">
          I agree to the {""}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Terms And Conditions
          </a>
          , {""}
          <a href="#" className="text-teal-600 hover:text-teal-700 underline">
            Refund Policy
          </a>
          .
        </div>
      </div>
      {/* -------------------------- */}
      <div className="text-center mt-8">
        <input
          disabled={!agreedToTerms}
          className={`
            w-full py-4 rounded-lg font-semibold text-white transition-all duration-200
            ${
              agreedToTerms
                ? "bg-teal-500 hover:bg-teal-600 hover:shadow-lg transform hover:-translate-y-0.5"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
          type="submit"
          value="Next"
        />
      </div>
    </form>
  );
};

export default RegistrationFee;
