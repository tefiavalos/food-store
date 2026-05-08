import type { Category } from "../../types/product";

export const renderCategories = (
  categories: Category[],
  onCategoryClick: (category: Category | "Todas") => void,
) => {
  const categoriesList = document.getElementById("categories-list");

  if (!categoriesList) return;

  categoriesList.innerHTML = "";

  const categoriesWithAll = ["Todas", ...categories];

  categoriesWithAll.forEach((category) => {
    const li = document.createElement("li");

    const button = document.createElement("button");

    button.textContent = category;

    button.addEventListener("click", () => {
      onCategoryClick(category as Category | "Todas");
    });

    li.appendChild(button);

    categoriesList.appendChild(li);
  });
};
