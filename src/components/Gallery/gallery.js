import React from "react";
import grnba from "../../assets/grnba.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <h2 className="text-xl font-bold text-center">
          {" "}
          Click below to view gallery for respective events:{" "}
        </h2>{" "}
        <br />
        <Link
          to="/grnbabadminton"
          class=" text-2xl text-blue-600 underline text-center font-bold text-xl hover:text-blue-800"
        >
          <li>GRNBA 6th Badminton Tournament</li>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
