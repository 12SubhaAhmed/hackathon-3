import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "@/types/products";

export async function getProduct(slug: string): Promise<Product | null> {
  const productArray = await client.fetch(
    groq`*[_type == "car" && slug.current == $slug]{
        _id,
        name,
        _type,
        image,
        pricePerDay,
        description,
        seatingCapacity,
        carType,
        fuelCapacity
    }`,
    { slug }
  );

  return productArray.length > 0 ? productArray[0] : null;
}
