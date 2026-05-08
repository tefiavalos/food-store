import { categories } from "../../data/categories";
import { products } from "../../data/data";

import { updateCartCount } from "../../utils/cart";

import { renderCategories } from "./renderCategories";
import { renderProducts } from "./renderProducts";

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);

  updateCartCount();

  renderCategories(categories, (selectedCategory) => {
    if (selectedCategory === "Todas") {
      renderProducts(products);

      return;
    }

    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory,
    );

    renderProducts(filteredProducts);
  });

  const searchInput = document.getElementById("search-input");

  if (!(searchInput instanceof HTMLInputElement)) return;

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText),
    );

    renderProducts(filteredProducts);
  });
});
