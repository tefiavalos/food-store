import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    description: "Hamburguesa con queso y papas",
    price: 10,
    image: "https://placehold.co/300x200/F97316/FFFFFF?text=Hamburguesa",
    category: "Hamburguesas",
  },
  {
    id: 2,
    name: "Hamburguesa Doble",
    description: "Doble carne con cheddar",
    price: 14,
    image: "https://placehold.co/300x200/F97316/FFFFFF?text=Doble+Burger",
    category: "Hamburguesas",
  },
  {
    id: 3,
    name: "Pizza Muzzarella",
    description: "Pizza clásica de muzzarella",
    price: 12,
    image: "https://placehold.co/300x200/DC2626/FFFFFF?text=Pizza",
    category: "Pizzas",
  },
  {
    id: 4,
    name: "Pizza Pepperoni",
    description: "Pizza con pepperoni y extra queso",
    price: 15,
    image: "https://placehold.co/300x200/DC2626/FFFFFF?text=Pepperoni",
    category: "Pizzas",
  },
  {
    id: 7,
    name: "Coca Cola",
    description: "Bebida gaseosa 500ml",
    price: 4,
    image: "https://placehold.co/300x200/2563EB/FFFFFF?text=Coca+Cola",
    category: "Bebidas",
  },
  {
    id: 8,
    name: "Limonada",
    description: "Limonada natural con hielo",
    price: 5,
    image: "https://placehold.co/300x200/2563EB/FFFFFF?text=Limonada",
    category: "Bebidas",
  },
];
