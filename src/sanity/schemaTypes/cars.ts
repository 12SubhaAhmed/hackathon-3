const car = {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96, // Recommended to limit the slug length
      },
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      description: 'Brand of the car (e.g., Nissan, Tesla, etc.)',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Car Type',
      description: 'Type of the car (e.g., Sport, Sedan, SUV, etc.)',
    },
    {
      name: 'fuelCapacity',
      type: 'number', // Changed from string to number
      title: 'Fuel Capacity (L or kWh)',
      description: 'Fuel or battery capacity (e.g., 90 for 90L, 100 for 100kWh)',
    },
    {
      name: 'transmission',
      type: 'string',
      title: 'Transmission',
      description: 'Type of transmission (e.g., Manual, Automatic)',
    },
    {
      name: 'seatingCapacity',
      type: 'number', // Changed from string to number
      title: 'Seating Capacity',
      description: 'Number of seats (e.g., 2, 4, 5)',
    },
    {
      name: 'pricePerDay',
      type: 'number', // Changed from string to number
      title: 'Price Per Day ($)',
      description: 'Rental price per day',
    },
    {
     name :'description',
     type:'string',
     title:'Description'
    },
    {
      name: 'originalPrice',
      type: 'number', // Changed from string to number
      title: 'Original Price ($)',
      description: 'Original price before discount (if applicable)',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Tags for categorization (e.g., popular, recommended)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Car Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Describe the image for accessibility and SEO',
        },
      ],
    },
  ],
};
export default car;