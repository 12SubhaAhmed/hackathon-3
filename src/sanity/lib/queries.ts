import { groq } from "next-sanity";

export const allProduct = groq`*[_type == "car"]`
export const four = groq`*[_type == "car"][0..3]`