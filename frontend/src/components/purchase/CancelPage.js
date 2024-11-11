// CancelPage.js
import React from "react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">
          Payment Canceled
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your payment was not processed. Please try again or contact support if
          the issue persists.
        </p>
        <Link
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          to={"/"}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default CancelPage;
