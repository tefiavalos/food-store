export type Category = "Hamburguesas" | "Pizzas" | "Bebidas";

export interface Product {
  id: number;

  name: string;

  description: string;

  price: number;

  image: string;

  category: Category;
}

export interface CartItem extends Product {
  quantity: number;
}
