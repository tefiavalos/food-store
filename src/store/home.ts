import type { Producto } from "../types/producto";

export const renderProductos = (productos: Producto[]) => {
  const contenedor = document.getElementById("contenedor-productos");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach((producto) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <span>$${producto.precio}</span>
      <button class="btn-agregar">Agregar</button>
    `;

    article.querySelector(".btn-agregar")?.addEventListener("click", () => {
      alert(`Agregaste: ${producto.nombre}`);
    });

    contenedor.appendChild(article);
  });
};
