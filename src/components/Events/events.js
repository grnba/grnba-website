import React from "react";

const Events = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>

        {/* Scrollable Events Table */}
        <div className="overflow-y-auto max-h-80 w-full">
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
    </div>
  );
};

export default Events;
