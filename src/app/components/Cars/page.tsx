"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allProduct } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";

const Cars = () => {
  const [cars, setCars] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCars, setVisibleCars] = useState(8); // Initially show 8 cars
  const [likedCars, setLikedCars] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState<string>(""); 

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response: Product[] = await client.fetch(allProduct);
        setCars(response);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      }
    }
    fetchProduct();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  const filteredCars = cars.filter((car) => {
    const carName = car.name ? car.name.toLowerCase() : "";
    const carType = car.carType ? car.carType.toLowerCase() : "";
  
    return carName.includes(searchQuery.toLowerCase()) || carType.includes(searchQuery.toLowerCase());
  });
  
  // Function to load more cars
  const showMoreCars = () => {
    setVisibleCars((prev) => prev + 8); // Increase by 8 cars
  };

  return (
    <div className="w-full h-full mt-[100px] lg:w-[1312px] lg:h-auto">
      {/* Search Bar */}
      <div className="flex justify-center mt-4 mb-6">
      
        <input      
          type="text"
          placeholder="Search for a car..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[300px] sm:w-[400px] md:w-[500px] px-4 py-2 border rounded-full focus:outline-none shadow-md"
        />
      </div>

      <div className="flex justify-between ml-[64px] w-full h-[44px]">
        <div className="text-gray-600 p-3 hover:shadow-[0_0_4px_1px_black] transition-all">
          {/* {searchQuery ? `Search Results for: "${searchQuery}"` : "Popular Cars"} */}
          {searchQuery ? `Search Results for: &quot;${searchQuery}&quot;` : "Popular Cars"}
        </div>
      </div>

      {/* Car Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 ml-[64px]">
        {filteredCars.slice(0, visibleCars).map((car) => (
          <Link key={car._id} href={`/product/${car.slug?.current || "#"}`}>
            <div className="w-[304px] h-[388px] border rounded-lg p-4 shadow-md bg-white hover:shadow-lg flex flex-col items-center">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-xl font-semibold text-black">{car.name}</h1>
                {likedCars[car._id] ? (
                  <GoHeartFill
                    className="ml-[35px] text-xl cursor-pointer text-red-500"
                    onClick={(e) => {
                      e.preventDefault();
                      setLikedCars((prev) => ({
                        ...prev,
                        [car._id]: !prev[car._id],
                      }));
                    }}
                  />
                ) : (
                  <GoHeart
                    className="ml-[35px] text-xl cursor-pointer text-gray-600"
                    onClick={(e) => {
                      e.preventDefault();
                      setLikedCars((prev) => ({
                        ...prev,
                        [car._id]: !prev[car._id],
                      }));
                    }}
                  />
                )}
              </div>
              <p className="text-sm text-[#3563E9]">{car.carType}</p>
              <div className="w-[232px] h-[72px] mt-[100px] relative">
                <Image
                  src={car.image ? urlFor(car.image).url() : "/default-car.png"}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="mt-4 text-center w-full">
                <div className="mt-2 text-gray-600 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <BsFillFuelPumpDieselFill className="text-gray-500" />
                    <p>{car.fuelCapacity}L</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdPeopleAlt className="text-gray-500" />
                    <p>{car.transmission} People</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mt-2 font-bold text-xl text-black">
                    ${car.pricePerDay}/day
                  </p>
                  <button className="bg-[#3563E9] w-[116px] h-[44px] text-white mt-5 px-4 py-2 rounded-sm hover:shadow-[0_0_15px_1px_#3563E9] transition-all">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/*  Show No Results Message */}
      {filteredCars.length === 0 && (
        <div className="text-center text-gray-600 mt-10 text-lg">
          No cars found for <span className="text-blue-500">&ldquo;{searchQuery}&rdquo;</span>
        </div>
      )}

      {/* Show More Button */}
      {visibleCars < filteredCars.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMoreCars}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Cars;

