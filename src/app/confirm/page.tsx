"use client";
import Link from "next/link";
import Navbar from "../components/Navbar/page";
import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function Final() {
  const searchParams = useSearchParams();
  const carName = searchParams.get("name");
  const carPrice = searchParams.get("price");
  const carImage = searchParams.get("image");

  console.log("Car Name:", carName);
  console.log("Car Price:", carPrice);
  console.log("Car Image:", carImage);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row">
        {/* SIDE BAR */}
        <div className="w-[360px] bg-white p-8 hidden sm:block border-2 shadow-md">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-md transition-all cursor-pointer">
              M A I N M E N U
            </h3>
            <ul className="space-y-4 text-gray-600">
              <Link href={"http://localhost:3000"}>
                <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full cursor-pointer">
                  Home
                </li>
              </Link>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Car Rent
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Insight
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Reimburse
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Inbox
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Calendar
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-4 hover:shadow-md transition-all">
              P R E F E R E N C E S
            </h3>
            <ul className="space-y-4">
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Settings
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Help & Center
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Dark Mode
              </li>
              <li className="hover:bg-blue-800 hover:text-white p-2 h-10 w-full">
                Log Out
              </li>
            </ul>
          </div>
        </div>

        {/* Rental Confirmation Section */}
        <div className="flex flex-col items-center justify-start sm:justify-center bg-gray-100 p-4 sm:p-8">
          <h1 className="text-2xl flex sm:text-3xl font-bold mb-4 text-center">
            Rental Confirmation
            <FaCheck />
          </h1>

          {/* Car Details */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-[350px] sm:w-[500px] mb-4">
            {carImage ? (
              <Image
                src={carImage}
                alt={carName || "Car Image"}
                width={300} height={300}
                className="w-full h-40 object-cover rounded-lg"
              />
            ) : (
              <p className="text-center text-gray-500">No car selected</p>
            )}
            <h2 className="text-xl font-semibold mt-4 text-center">
              {carName || "Car Name"}
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Price: ${carPrice || "0"} per day
            </p>
          </div>
        </div>

        {/* Additional Images */}
        <div className="sm:w-1/3 mt-4 sm:mt-0 rounded-[10px]">
          <Image
            src="/Images/route.png"
            alt="Route Details"
            width={300} height={300}
            className="w-full border-2 h-auto mb-4"
          />
          <Image
            src="/Images/recent.png"
            alt="Recent Rentals"
            width={300} height={300}
            className="w-full border-2 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
