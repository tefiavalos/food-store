import type { Producto } from "../types/producto";

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Hamburguesa",
    descripcion: "Hamburguesa con queso",
    precio: 10,
    imagen:
      "https://placehold.org/150x150/13acac/000000?text=placeholder%22%20alt=%22Placeholder%20personalizado",
    categoria: "Hamburguesas",
  },
  {
    id: 2,
    nombre: "Pizza",
    descripcion: "Pizza de muzzarella",
    precio: 12,
    imagen:
      "https://placehold.org/150x150/13acac/000000?text=placeholder%22%20alt=%22Placeholder%20personalizado",
    categoria: "Pizzas",
  },
];
