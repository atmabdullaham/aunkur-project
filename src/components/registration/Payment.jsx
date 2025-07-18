import React, { useState } from "react";

import { Check, CreditCard } from "lucide-react";
import axios from "axios";

const Payment = ({ onSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState("bkash");
  const [bkashNumber, setBkashNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handlePayment = () => {
    // Simulate success (replace with actual payment logic)
    const paymentInfo = {
      transactionId: "TXN123456",
      paymentMethod: "bKash",
      amount: 200,
    };

    onSuccess(paymentInfo); // Send payment data to parent
  };

  const paymentMethods = [
    {
      id: "bkash",
      name: "bKash Payment",
      icon: "🔴",
      color: "bg-pink-50 border-pink-200 text-pink-700",
    },
    {
      id: "sslcommerz",
      name: "SSLCommerz",
      icon: "🔒",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      id: "nagad",
      name: "Send Money",
      icon: "🟠",
      color: "bg-orange-50 border-orange-200 text-orange-700",
    },
  ];

  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/bkash/payment/create",
        { amount: 10, orderId: 1 },
        { withCredentials: true }
      );
      window.location.href = data.bkashURL;
    } catch (error) {
      alert("Payment error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* Payment Method Selection */}
      <div className="bg-gray-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          পেমেন্ট মেথড
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          রেজিস্ট্রেশন ফি -{" "}
          <span className="text-teal-600 font-semibold">200 TAKA</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`
                p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                ${
                  selectedMethod === method.id
                    ? method.color + " border-opacity-100 shadow-sm"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{method.icon}</div>
                <p className="font-medium text-sm">{method.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* bKash Payment Form */}
        {selectedMethod === "bkash" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"></div>
        )}

        {/* SSLCommerz Payment Info */}
        {selectedMethod === "sslcommerz" && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-blue-800">
                SSLCommerz Payment Gateway
              </h3>
            </div>
            <p className="text-sm text-blue-700 mb-2">
              You will be redirected to SSLCommerz secure payment gateway where
              you can pay using:
            </p>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>• Credit/Debit Cards (Visa, MasterCard, American Express)</li>
              <li>• Mobile Banking (bKash, Rocket, Nagad)</li>
              <li>• Internet Banking</li>
              <li>• Other digital wallets</li>
            </ul>
          </div>
        )}

        {/* Nagad Payment Info */}
        {selectedMethod === "nagad" && (
          <div className="bg-orange-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">🟠</div>
              <h3 className="font-semibold text-orange-800">
                Nagad Send Money
              </h3>
            </div>
            <p className="text-sm text-orange-700">
              Send money to our Nagad number and enter the transaction details
              below.
            </p>
          </div>
        )}

        {/* Terms and Conditions */}
        <div className="flex items-start gap-3 mb-6">
          <button
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
            I agree to the{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Terms And Conditions
            </a>
            ,{" "}
            <a href="#" className="text-teal-600 hover:text-teal-700 underline">
              Refund Policy
            </a>
            .
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={pay}
          disabled={!agreedToTerms}
          className={`
            w-full py-4 rounded-lg font-semibold text-white transition-all duration-200
            ${
              agreedToTerms
                ? "bg-teal-500 hover:bg-teal-600 hover:shadow-lg transform hover:-translate-y-0.5"
                : "bg-gray-300 cursor-not-allowed"
            }
          `}
        >
          পেমেন্ট করুন
        </button>
      </div>

      {/* Payment Rules */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          পেমেন্ট করার নিয়ম
        </h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>
              বিকাশ পেমেন্ট গিলেই কোর্স করার জন্য পেমেন্ট বাটন ক্লিক করলে বিকাশ
              পেমেন্ট এর অপশন হবে
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>
              আপনার যে নাম্বার থেকে পেমেন্ট করবেন সে বিকাশ নাম্বার দিতে হবে
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>বিকাশ ট্রাঞ্জেকশনের কোড পাঠানো আপনার মোবাইলে এসেছে হবে</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>এরাউন্ট দেখে সবকিছু ঠিক থাকলে দিন কোড দিতে পারবে</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>কনফার্ম ক্লিক করলে পেমেন্ট হয়ে যাবে আপনার বিকাশ থেকে</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
