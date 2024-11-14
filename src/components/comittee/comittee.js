import React from "react";

const Committee = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 h-[70vh] overflow-y-scroll">
        <h1 className="text-4xl font-bold text-center mb-8">
          GRNBA Executive Committee
        </h1>

        <div className="w-full">
          <p className="text-2xl font-bold text-center mb-4">
            GRNBA Executive Committee members are as follows:
          </p>
          {/* Committee Members List */}
          <div className="text-lg leading-relaxed space-y-2">
            <p>1. Rajendra Gurung - President</p>
            <p>2. **** - Vice President</p>
            <p>3. ***** - General Secretary</p>
            {/* Add additional members here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
