import { type SchemaTypeDefinition } from 'sanity'
import car from "./cars";
import bill from './bill';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car, bill],
}
