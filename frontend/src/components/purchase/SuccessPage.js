// SuccessPage.js
import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase! Your payment was processed successfully.
        </p>
        <Link
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          to={"/"}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
