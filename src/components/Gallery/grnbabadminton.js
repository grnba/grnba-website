import React, { useState } from "react";

// Dynamically import all images from the 'grnba' folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);

const grnbaImages = importAll(
  require.context("../../assets/grnba", false, /\.(png|jpe?g|svg)$/)
);

const GrnbaBadminton = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">
          GRNBA 6th Badminton Tournament:
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {grnbaImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)} // Set the selected image on click
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedImage(null)} // Close the modal when clicking outside
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 text-lg font-bold"
              onClick={() => setSelectedImage(null)} // Close button
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GrnbaBadminton;
