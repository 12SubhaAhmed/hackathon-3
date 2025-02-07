export interface Product {
    _id: string;
    name: string;
    brand: string;
    carType: string;  
    fuelCapacity: number;  
    transmission: string;
    seatingCapacity: number,
    _type: "car";
    image?: {
        asset: {
            _ref: string;
        };
    };
    pricePerDay: number;
    description?: string;
    slug: {
        _type: "slug";  
        current: string;
    };
}


