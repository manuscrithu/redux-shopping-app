export interface Product {
    id: number;
    title: string;
    img: string;
    description: string;
    price: number;
}

export interface CartItem extends Product {
    quantity: number;
}