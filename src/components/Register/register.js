import React from "react";

const Register = () => {
  return (
    <div className="font-sans p-6">
      {/* Title Section */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">GRNBA Badminton Tournament 2024</h1>

      {/* Register Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdt2cztduL2Eg9T8B6KASohQ60sJ-JaZbQcTACaD9qvFsFUpA/viewform?usp=sf_link"
        className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md text-center mb-6 hover:bg-blue-600"
      >
        Register Here
      </a>

      {/* Tournament Information */}
      <p className="text-lg mb-4">
        <strong>Tournament Information</strong>
        <br />
        GRNBA is pleased to announce their joint Badminton Tournament for 2024. We will feature 9 categories across the badminton disciplines (MS, MD-A, MD-B, VD-35, VD-45, SVD-55, MD, LD, B) over 1 day, 14 December 2024. Cash prizes and medals await the winners of each category.
      </p>

      <p className="text-lg mb-4">
        We are implementing cheaper registration for those sending in their entry on or before 07th December, at £20 per person. This will go up to £25 per person after that date. So, sign up now to one of Aldershot's largest Nepalese badminton tournaments!
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registration</h2>
      <p className="text-lg mb-4">
        Entries to be made on the official TOURNAMENT FORM or via Viber Group (GRNBA 6th Open Tournament). Please follow our Viber Group for registration.
      </p>

      <p className="text-lg mb-4">
        <strong>Registration Deadline:</strong> December 07th, 2024. Any registration after this date will be turned down.
      </p>

      {/* Tournament Dates Table */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dates</h2>
      <table className="min-w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr>
            <th className="border p-3 text-left bg-gray-100">Category</th>
            <th className="border p-3 text-left bg-gray-100">Start Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3">MEN'S SINGLE</td>
            <td className="border p-3">09.00 AM</td>
          </tr>
          <tr>
            <td className="border p-3">MEN'S DOUBLE A</td>
            <td className="border p-3">12.00 PM</td>
          </tr>
          <tr>
            <td className="border p-3">MEN'S DOUBLE B</td>
            <td className="border p-3">09.00 AM</td>
          </tr>
          <tr>
            <td className="border p-3">VETERANS DOUBLE 35+</td>
            <td className="border p-3">03.00 PM</td>
          </tr>
          <tr>
            <td className="border p-3">VETERANS DOUBLE 45+</td>
            <td className="border p-3">12.00 PM</td>
          </tr>
          <tr>
            <td className="border p-3">SUPER VETERANS DOUBLE 55+</td>
            <td className="border p-3">09.00 AM</td>
          </tr>
          <tr>
            <td className="border p-3">MIXED DOUBLE</td>
            <td className="border p-3">04.00 PM</td>
          </tr>
          <tr>
            <td className="border p-3">LADIES DOUBLE</td>
            <td className="border p-3">01.00 PM</td>
          </tr>
          <tr>
            <td className="border p-3">BEGINNERS</td>
            <td className="border p-3">04.00 PM</td>
          </tr>
        </tbody>
      </table>

      {/* Location Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location</h2>
      <p className="text-lg mb-4">
        <strong>Garrison Sports Centre</strong>
        <br />
        Rawlinson Rd, Aldershot GU11 2EY
        <br />
        Nearest Station: Aldershot (south western line), within 20-30 min walking distance
      </p>

      {/* Categories Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
      <p className="text-lg mb-4">
        Players shall self-declare their categories based on specific criteria. Players may register above their level but may not register below their level. The tournament values bringing higher level players together with lower level players to enhance the experience for all.
      </p>

      {/* Registration Fee Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registration Fee</h2>
      <p className="text-lg mb-4">
        <strong>On or before 7th December 2024:</strong> £20 per person
        <br />
        <strong>After 7th December 2024:</strong> £25 per person
      </p>

      {/* Prizes Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prizes</h2>
      <p className="text-lg mb-4">
        WINNER: ALL WINNERS WILL BE REWARDED WITH CASH PRIZE AND A TROPHY
      </p>

      {/* Register Button Again */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register Now!</h2>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdt2cztduL2Eg9T8B6KASohQ60sJ-JaZbQcTACaD9qvFsFUpA/viewform?usp=sf_link"
        className="inline-block bg-blue-500 text-white py-3 px-6 rounded-md text-center mb-6 hover:bg-blue-600"
      >
        Register Here
      </a>

      {/* Payment Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment</h2>
      <p className="text-lg mb-4">
        Please transfer the money to the following account after filling in the registration form:
        <br />
        <strong>Account Name: GREATER RUSHMOOR NEPALESE BADMINTON ASSOCIATION (GRNBA)</strong>
        <br />
        <strong>Bank: LLOYDS</strong>
        <br />
        <strong>Sort Code: 309626</strong>
        <br />
        <strong>Account Number: 81760868</strong>
        <br />
        <strong>Reference:</strong> PLEASE FILL YOUR FIRST NAME ON THE REFERENCE.
        <br />
        <strong>Note:</strong> Once fee paid, please tick on your name on the Viber Group (GRNBA 6th Open Tournament).
      </p>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
      <p className="text-lg mb-4">
        For further questions, please mail:
        <a href="mailto:grnba2017@gmail.com" className="text-blue-500 underline">
          grnba2017@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Register;
