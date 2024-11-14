import React from "react";
import grnba from "../../assets/grnba.jpg";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={grnba} // Placeholder image URL
              alt="Gallery Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={grnba} // Placeholder image URL
              alt="Gallery Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={grnba} // Placeholder image URL
              alt="Gallery Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
