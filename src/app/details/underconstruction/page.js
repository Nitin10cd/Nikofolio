import React from "react";
import { FaTools } from "react-icons/fa";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-yellow-100 text-yellow-600 mb-6">
          <FaTools className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Coming Soon!</h1>
        <p className="text-gray-600 text-lg">
          This is my project details page which is under development , I will update it soon.
        </p>
      </div>
    </div>
  );
};

export default UnderConstructionPage;