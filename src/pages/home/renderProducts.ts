import type { Product } from "../../types/product";

import { addToCart, updateCartCount } from "../../utils/cart";

import { showToast } from "../../utils/showToast";

export const renderProducts = (productos: Product[]) => {
  const productsContainer = document.getElementById("products-container");

  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  if (productos.length === 0) {
    productsContainer.innerHTML = `
      <p>No se encontraron productos</p>
    `;

    return;
  }

  productos.forEach((producto) => {
    const article = document.createElement("article");

    article.classList.add("product-card");

    article.innerHTML = `
      <img
        src="${producto.image}"
        alt="${producto.name}"
      />

      <h3>${producto.name}</h3>

      <p>${producto.description}</p>

      <span>$${producto.price}</span>

      <button class="btn-add">
        Agregar
      </button>
    `;

    article.querySelector(".btn-add")?.addEventListener("click", () => {
      addToCart(producto);

      updateCartCount();

      showToast(`Agregaste: ${producto.name}`, "success");
    });

    productsContainer.appendChild(article);
  });
};
