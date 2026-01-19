// ---------- Product Data ----------
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphone", price: 2000 },
  { id: 3, name: "Mouse", price: 500 },
  { id: 4, name: "Keyboard", price: 1500 },
];

// ---------- DOM Elements ----------
const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const totalPriceEl = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

// ---------- Cart ----------
let cart = [];

// ---------- Display Products ----------
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

// ---------- Add to Cart ----------
function addToCart(id) {
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
}

// ---------- Update Cart UI ----------
function updateCart() {
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = `<p class="empty">Your cart is empty</p>`;
    cartTotal.classList.add("hidden");
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name} (x${item.qty})</span>
      <span>₹${item.price * item.qty}</span>
    `;

    cartList.appendChild(div);
  });

  calculateTotal();
  cartTotal.classList.remove("hidden");
}

// ---------- Calculate Total ----------
function calculateTotal() {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;
  });

  totalPriceEl.textContent = total;
}

// ---------- Checkout ----------
checkoutBtn.addEventListener("click", () => {
  alert("Order placed successfully ✅");

  cart = [];
  updateCart();
});

// ---------- Initial Call ----------
renderProducts();
