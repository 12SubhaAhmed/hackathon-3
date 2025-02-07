"use client";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

export default function Billing() {
  const searchParams = useSearchParams();
  const carName = searchParams.get("name");
  const carPrice = searchParams.get("price");
  const carImage = searchParams.get("image");

  console.log("Car Name:", carName);
  console.log("Car Price:", carPrice);
  console.log("Car Image:", carImage);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Rental Summary (Visible on all screens) */}
      <div className="w-[330px] h-[450px] mt-6 block lg:hidden mx-auto sm:ml-[50px] shadow-md rounded-lg bg-white p-4">
        {carImage ? (
          <img
            src={carImage}
            alt={carName || "Car Image"}
            className="w-full h-[105px] object-cover rounded-lg"
          />
        ) : (
          <p className="text-center text-gray-500">No car selected</p>
        )}
        <h2 className="text-lg font-semibold mt-4">{carName || "Car Name"}</h2>
        <p className="text-gray-600">Price: ${carPrice || "0"} per day</p>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-4 gap-6">
        {/* Billing Form */}
        <div className="bg-white w-full lg:w-[805px] p-6 shadow-lg rounded-lg">
          <form className="space-y-6">
            <Image src="/Images/Info.png"
             alt="Billing Info"
             width={300}
             height={300}
             />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Name", "Phone Number", "Address", "Town/City"].map(
                (field, index) => (
                  <div key={index}>
                    <label className="block font-semibold">{field}</label>
                    <input
                      type="text"
                      placeholder={field}
                      className="w-full mt-2 bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )
              )}
            </div>
          </form>

          {/* Rental Info */}
          <form className="space-y-6 mt-8">
            <Image src="/Images/Rental Info.png" alt="Rental Info" width={300} height={300}/>

            {/* Pick Up Section */}
            <img src="/Images/PickUp.png" alt="Pick Up" className="mt-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Location", "Date", "Time"].map((field, index) => (
                <div key={index}>
                  <label className="block font-semibold">{field}</label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full mt-2 bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>

            {/* Drop Off Section */}
            <img src="/Images/drop.png" alt="Drop Off" className="mt-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Location", "Date", "Time"].map((field, index) => (
                <div key={index}>
                  <label className="block font-semibold">{field}</label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full mt-2 bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </form>

          {/* Payment Summary */}
          <form className="space-y-6 mt-8">
            <Image src="/Images/payment.png" alt="Payment Method" width={200} height={200}/>
            <div className="flex justify-between sm:justify-start gap-4 mt-4">
              <Image src="/Images/Credit.png" alt="Credit Card" width={100} height={100}/>
              <Image src="/Images/Visa.png" alt="Visa" width={100} height={100}/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Card Number", "Expiration Date", "Card Holder", "CVC"].map(
                (field, index) => (
                  <div key={index}>
                    <label className="block font-semibold">{field}</label>
                    <input
                      type={field === "Expiration Date" ? "number" : "text"}
                      placeholder={field}
                      className="w-full mt-2 bg-gray-100 p-4 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )
              )}
            </div>

            {/* Payment Options */}
            <div className="space-y-3 mt-4">
              {["Paypal", "Bitcoin"].map((method, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-100 p-3 rounded-md"
                >
                  <input type="radio" name="payment" className="mr-2" />
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </form>

          {/* Confirmation Section */}
          <form className="space-y-6 mt-8">
            <Image src="/Images/confirm.png" alt="Confirmation" width={300} height={300}/>

            {[
              "I agree with receiving marketing and newsletter emails. No spam, promised!",
              "I agree with the terms and conditions and privacy policy.",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-100 p-3 rounded-md"
              >
                <input type="checkbox" className="mt-1 mr-2" />
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </form>

          {/* Confirmation Button */}
          <Link
            href={`/confirm?name=${encodeURIComponent(carName ?? "")}&price=${encodeURIComponent(carPrice ?? "")}${
              carImage
                ? `&image=${encodeURIComponent(urlFor(carImage).url() ?? "")}`
                : ""
            }`}
          >
            <button className="w-full mt-5 sm:w-40 bg-blue-600 text-white font-semibold p-3 rounded-md hover:bg-blue-900 transition-all">
              Rent Now
            </button>
          </Link>
        </div>

        {/* Rental Summary (Visible on Larger Screens) */}
        <div className="hidden lg:block w-[380px] h-[250px] mt-6 ml-[50px] shadow-md rounded-lg bg-white p-4">
          {carImage ? (
            <Image
              src={carImage}
              alt={carName || "Car Image"}
              className="w-full  sm:h-[105px] object-cover rounded-lg"
              width={300} height={300}
            />
          ) : (
            <p className="text-center text-gray-500">No car selected</p>
          )}
          <h2 className="text-xl font-semibold mt-7">
            {carName || "Car Name"}
          </h2>
          <p className="text-gray-600 mt-2">
            Price: ${carPrice || "0"} per day
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
