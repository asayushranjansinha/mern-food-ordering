export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
}
export type MenuItems = {
    _id: string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string;
    owner: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItems[];
    lastUpdated: string;
    imageUrl: string;
}
