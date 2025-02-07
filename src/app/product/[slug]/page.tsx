import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar/page";
import Footer from "@/app/components/Footer/page";
import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/sanity/lib/getProduct";

export interface productPgProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: productPgProps) {
  const { slug } = params as {slug : string};
  const product = await getProduct(slug);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Car not found.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Responsive Layout */}
      <div className="flex flex-col lg:flex-row w-full p-4 max-w-6xl mx-auto gap-6">
        {/* Sidebar (Hidden on small screens) */}
        <div className="hidden lg:block w-[300px] bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Type</h3>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((item, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" id={item} className="mr-2 accent-blue-500" />
                <label htmlFor={item} className="text-gray-600">{item}</label>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Capacity</h3>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((item, index) => (
              <li key={index} className="flex items-center">
                <input type="checkbox" id={item} className="mr-2 accent-blue-500" />
                <label htmlFor={item} className="text-gray-600">{item}</label>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-4">Price</h3>
          <input type="range" min="0" max="100" className="w-full accent-blue-500" />
          <div className="text-gray-600 mt-2">Max. $100.00</div>
        </div>

        {/* Product Details */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Car Image */}
            <div className="justify-center">
              {product.image ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={900}
                  height={900}
                  className="rounded-lg shadow-md"
                />
              ) : (
                <div className="w-[500px] h-[350px] flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
                  No Image Available
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
              <p className="text-xl text-gray-700 font-semibold mt-2">${product.pricePerDay} /day</p>
              <p className="text-sm text-gray-500 mt-4">{product.description}</p>

              <ul className="mt-4 text-gray-600 space-y-2">
                <li><span className="font-semibold">Type:</span> {product._type}</li>
                <li><span className="font-semibold">Seating Capacity:</span> {product.seatingCapacity}</li>
                <li><span className="font-semibold">Fuel Capacity:</span> {product.fuelCapacity}L</li>
              </ul>

              {/* Rent Now Button */}
              <Link
  href={`/billing?name=${encodeURIComponent(product.name)}&price=${product.pricePerDay}${
    product.image ? `&image=${encodeURIComponent(urlFor(product.image).url())}` : ""
  }`}
>
              <button className="bg-blue-600 text-white font-semibold h-12 p-3 mt-6 rounded-lg w-full md:w-40 hover:bg-blue-900 transition-all">
                Rent Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}



