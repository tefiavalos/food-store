import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,

    name: "Hamburguesa",

    description: "Hamburguesa con queso",

    price: 10,

    image:
      "https://placehold.org/150x150/13acac/000000?text=placeholder%22%20alt=%22Placeholder%20personalizado",

    category: "Hamburguesas",
  },

  {
    id: 2,

    name: "Pizza",

    description: "Pizza de muzzarella",

    price: 12,

    image:
      "https://placehold.org/150x150/13acac/000000?text=placeholder%22%20alt=%22Placeholder%20personalizado",

    category: "Pizzas",
  },
];
