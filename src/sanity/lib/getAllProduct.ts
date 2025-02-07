import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// ✅ Fetch all product slugs
export async function getAllProducts() {
  return client.fetch(groq`*[_type == "car"]{ "slug": slug.current }`);
}
