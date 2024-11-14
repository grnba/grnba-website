import React from "react";
import grnba from "../../assets/grnba.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <img src={grnba} alt="Image 1" className="w-full h-50" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-8">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <img
              src={require("../../assets/logo.jpg")}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="text-lg leading-relaxed">
              <p className="text-2xl font-bold">
                Welcome to GRNBA official website
              </p>
              GRNBA welcomes you all. {" "}
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Add something here{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
