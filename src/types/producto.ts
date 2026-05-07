export type Categoria = "Hamburguesas" | "Pizzas" | "Bebidas";

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: Categoria;
}
