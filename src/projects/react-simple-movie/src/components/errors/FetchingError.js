import React from "react";

const FetchingError = ({ error }) => {
  return (
    <div className="flex items-center justify-center error-page">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-semibold text-red-600">Error!! 🌍</h1>
        <p className="text-2xl font-semibold text-gray-300">{error}</p>
      </div>
    </div>
  );
};

export default FetchingError;
