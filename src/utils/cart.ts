import type { CartItem, Product } from "../types/product";

const CART_KEY = "cart";

export const getCart = (): CartItem[] => {
  const cart = localStorage.getItem(CART_KEY);

  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product: Product) => {
  const cart = getCart();

  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart(cart);
};

export const removeFromCart = (id: number) => {
  const cart = getCart().filter((item) => item.id !== id);

  saveCart(cart);
};

export const getCartTotal = () => {
  const cart = getCart();

  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
};

export const updateCartCount = () => {
  const cartCountElement = document.getElementById("cart-count");

  if (!cartCountElement) return;

  const cart = getCart();

  const totalProducts = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  cartCountElement.textContent = totalProducts.toString();
};

export const increaseQuantity = (id: number) => {
  const cart = getCart();

  const product = cart.find((item) => item.id === id);

  if (!product) return;

  product.quantity += 1;

  saveCart(cart);
};

export const decreaseQuantity = (id: number) => {
  const cart = getCart();

  const product = cart.find((item) => item.id === id);

  if (!product) return;

  if (product.quantity === 1) {
    const updatedCart = cart.filter((item) => item.id !== id);

    saveCart(updatedCart);

    return;
  }

  product.quantity -= 1;

  saveCart(cart);
};
