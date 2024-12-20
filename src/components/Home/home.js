import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
          <img
            src={require("../../assets/c1.jpg")}
            alt="Slide 1"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="relative h-[50vh]">
          <img
            src={require("../../assets/c2.jpg")}
            alt="Slide 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="relative h-[50vh]">
          <img
            src={require("../../assets/c3.jpg")}
            alt="Slide 3"
            className="h-full w-full object-contain"
          />
        </div>
      </Carousel>

      {/* Other Section */}
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">News:</h2>
        <h2 className="text-2xl  mb-4">GRNBA 6th Badminton Competition:</h2>
        <p>
          {" "}
          The 6th GRNBA Badminton Tournament was held at the Aldershot Garrison
          Sports Centre on Saturday, 14 December 2024. The event went very well,
          and everyone played safely without any injuries. In total, 130 players
          participated in the tournament. Everyone had shown great interest and
          excitement for the competition.
        </p>{" "}
        <br />
        <p>
          The winners and runners-up in the competition are listed below: <br />{" "}
          <br /> MS (Men Single) <br />
          1. Rukesh Maharjan (Winner) <br />
          2. Bivek Rai (Runner-up)
          <br /> <br />
          MD (A) Men Double <br />
          1. Rukesh Maharjan / Pratick Grg (Winner) <br />
          2. Deepchan Rai / Bivek Rai (Runner-up)
          <br /> <br />
          MD (B) Men Double <br />
          1. Deepak Grg/ Bibek Thapa (Winner)
          <br />
          2. Anil Singjali / Lal Gurung (Runner-up)
          <br /> <br />
          VD 45 + <br />
          1. Bir Ale / Mohan Grg (Winner)
          <br />
          2. Bishnu Rai / Chaturman Limbu (Runner-up)
          <br /> <br />
          (CM) SVD (Super Veterans) <br />
          1. Bishnu Rai / Chandra Rana (Winner)
          <br />
          2. Krishna Grg / Khem Limbu (Runner-up)
          <br /> <br />
          LD (Ladies Double) <br /> 1. Geeta Thapa / Mira Thebe (Winner)
          <br /> 2. Michelle/ Jasmin (Runner-up)
          <br /> <br />
          XD (Mix Double) <br /> 1. Sudeep Sedai / Cherry (Winner)
          <br />
          2. Prakash Rai / Michelle (Runner-up) <br />
        </p>
        <br />
        <h2 class="text-lg mt-4 items-center justify-center">
          <Link
            to="https://everesttimes.net/archives/49712"
            class=" text-2xl text-blue-600 underline font-bold text-xl hover:text-blue-800"
          >
            For more details,{" "}
            <span class="highlight font-semibold">Click Here</span>
          </Link>
        </h2>{" "}
        <br />
        <p class="text-lg items-center justify-center">
          <Link
            to="https://everesttimes.net/archives/49712"
            class=" text-2xl text-blue-600 underline font-bold text-xl hover:text-blue-800"
          >
            <span class="highlight font-semibold">Click Here</span> to view
            GRNBA 6th Badminton Competition gallery!!!
          </Link>
        </p>{" "}
        <br />
        <h2 className="text-2xl font-bold mb-4">Upcoming Events:</h2>
        <h3>
          No upcoming events atm, Please keep on visiting our profile for any
          upcoming events.
        </h3>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Past Events:</h2>
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
    </div>
  );
};

export default Home;
