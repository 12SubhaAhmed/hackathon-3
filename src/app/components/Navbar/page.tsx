import React from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import { PiHeartFill } from "react-icons/pi";
import { VscBellDot } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="shadow-md">
      {/* HEADLINE */}
      <div className="border-b shadow-sm flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2 text-lg font-bold">
          <MdKeyboardCommandKey className="text-blue-600 w-6 h-6" />
          <h1>High Fidelity Dashboard - Home Rent</h1>
        </div>
        <div className="text-sm font-medium">
          <span className="text-gray-600">Last Updated:</span>{" "}
          <span className="font-bold">8 Aug 2022</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="w-40">
          <img src="/Images/Logo.png" alt="Company Logo" className="w-full" />
        </div>

        {/* Icons & Profile */}
        <div className="flex items-center space-x-4">
          <PiHeartFill className="text-black text-2xl" />
          <VscBellDot className="text-black text-2xl" />
          <IoIosSettings className="text-black text-2xl" />
          <img
            src="/Images/p2.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </nav>
    </div>
  );
}
