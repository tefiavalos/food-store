type ToastType = "success" | "error";

export const showToast = (message: string, type: ToastType = "success") => {
  const container = document.getElementById("toast-container");

  if (!container) return;

  const toast = document.createElement("div");

  toast.classList.add("toast");

  toast.classList.add(`toast-${type}`);

  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
};
