import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
