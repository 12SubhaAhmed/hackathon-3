'use client'
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

export default function PickupDropoff() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex justify-center mt-10 items-center w-full p-4">
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl relative bg-white shadow-md rounded-lg p-6">
        {/* Pickup Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
          <label className="block text-gray-700 font-semibold">Pickup Location</label>
          <input
            type="text"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg"
          />
          {showDetails && (
            <div className="mt-3">
              <label className="block text-gray-700">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
              />

              <label className="block text-gray-700 mt-3">Pickup Time</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Arrow Button */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            <FaExchangeAlt size={20} />
          </button>
        </div>

        {/* Drop-off Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-gray-100">
          <label className="block text-gray-700 font-semibold">Drop-off Location</label>
          <input
            type="text"
            placeholder="Enter drop-off location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg"
          />
          {showDetails && (
            <div className="mt-3">
              <label className="block text-gray-700">Drop-off Date</label>
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
              />

              <label className="block text-gray-700 mt-3">Drop-off Time</label>
              <input
                type="time"
                value={dropoffTime}
                onChange={(e) => setDropoffTime(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
