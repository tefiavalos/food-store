import type { Product } from "../../types/product";

import { addToCart, updateCartCount } from "../../utils/cart";

import { showToast } from "../../utils/showToast";

export const renderProducts = (products: Product[]) => {
  const productsContainer = document.getElementById("products-container");

  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  if (products.length === 0) {
    productsContainer.innerHTML = `
      <p>No se encontraron productos</p>
    `;

    return;
  }

  products.forEach((product) => {
    const article = document.createElement("article");

    article.classList.add("product-card");

    article.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      />

      <h3>${product.name}</h3>

      <p>${product.description}</p>

      <span>$${product.price}</span>

      <button class="btn-add">
        Agregar
      </button>
    `;

    article.querySelector(".btn-add")?.addEventListener("click", () => {
      addToCart(product);

      updateCartCount();

      showToast(`Agregaste: ${product.name}`, "success");
    });

    productsContainer.appendChild(article);
  });
};
