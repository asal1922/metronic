import images from "../../../../../public/assets/images";

export type Product = {
    title: string;
    items: string[];
};

export type Price = {
    price: string;
    status: string;
};

export type Deposit = {
    deposit: string;
    status: string;
};

export type Representative = {
    representative: string;
    role: string;
};

export type TableData = {
    product: Product;
    price: Price;
    deposit: Deposit;
    representative: Representative;
    status: string;
    image: keyof typeof images.infoTable;
};
