import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-0 p-0">
      {/* Carousel Section */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="h-[50vh] m-0 p-0" // Set carousel height to half the viewport height
      >
        <div className="relative h-[50vh]"> 
          <img src={require('../../assets/c1.jpg')} alt="Slide 1" className="h-full w-full object-contain" />
        </div>
        <div className="relative h-[50vh]"> 
          <img src={require('../../assets/c2.jpg')} alt="Slide 2" className="h-full w-full object-contain" />
        </div>
        <div className="relative h-[50vh]"> 
          <img src={require('../../assets/c3.jpg')} alt="Slide 3" className="h-full w-full object-contain" />
        </div>
      </Carousel>

      {/* Other Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events:</h2>
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-lg font-semibold text-gray-600">
                  Event Title
                </th>
                <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-lg font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-4 border-b-2 border-gray-200 text-left text-lg font-semibold text-gray-600">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Event 1 */}
              <tr>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  6Th GRNBA Open Badminton
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  Dec 14, 2024
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  Aldershot Garrison
                </td>
              </tr>

              {/* Sample Event 2 */}
              <tr>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  ***
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  ***
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                 ***
                </td>
              </tr>

              {/* Additional events can be added here */}
            </tbody>
          </table>
        </div>
        <div class=" items-center justify-center text-center p-4">
  <p class="text-lg items-center justify-center">
    <span class="highlight font-semibold">Click below</span> to register for the 6th GRNBA badminton competition!!!
  </p>

  <h2 class="text-lg mt-4 items-center justify-center">
    <Link to="/register" class=" text-2xl text-blue-600 underline font-bold text-xl hover:text-blue-800">
      GRNBA 6th Badminton Competition
    </Link>
  </h2>
</div>

    </div>
  );
};

export default Home;
