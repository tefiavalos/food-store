import {
  decreaseQuantity,
  getCart,
  getCartTotal,
  increaseQuantity,
  removeFromCart,
  updateCartCount,
} from "../../utils/cart";

const container = document.getElementById("cart-container");

const totalElement = document.getElementById("total");

const renderCart = () => {
  if (!container || !totalElement) return;

  const cart = getCart();

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <p>Tu carrito está vacío</p>
    `;

    totalElement.textContent = "";

    return;
  }

  cart.forEach((product) => {
    const article = document.createElement("article");

    article.classList.add("cart-item");

    article.innerHTML = `
  <div class="cart-item-info">
    <h3>${product.name}</h3>

    <p>Precio: $${product.price}</p>

    <p>
      Subtotal:
      $${product.price * product.quantity}
    </p>
  </div>

  <div class="cart-actions">
    <button class="btn-decrease">
      -
    </button>

    <span>${product.quantity}</span>

    <button class="btn-increase">
      +
    </button>

    <button class="btn-remove">
      Borrar
    </button>
  </div>
`;

    article.querySelector(".btn-increase")?.addEventListener("click", () => {
      increaseQuantity(product.id);

      updateCartCount();

      renderCart();
    });

    article.querySelector(".btn-decrease")?.addEventListener("click", () => {
      decreaseQuantity(product.id);

      updateCartCount();

      renderCart();
    });

    article.querySelector(".btn-remove")?.addEventListener("click", () => {
      removeFromCart(product.id);

      updateCartCount();

      renderCart();
    });

    container.appendChild(article);
  });

  totalElement.textContent = `
    Total: $${getCartTotal()}
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  renderCart();
});
