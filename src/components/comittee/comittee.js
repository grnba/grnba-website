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
            <p>2. Deepchan Rai - Vice President</p>
            <p>3. Nirmal Shrees - General Secretary</p>
            <p>4. Sanjay Tamang - Treasurer</p>
            <p>5. Asmita Rai - Media Secretary</p>
            <p>6. Chandra Rana - Member</p>
            <p>7. Rajin Rai- Member</p>
            <p>8. Dewan Limbu - Member</p>
            <p>9. Ashok Bangshi - Member</p>
            {/* Add additional members here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
