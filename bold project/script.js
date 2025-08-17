// Menu data
const menu = [
  { name: "Spring Rolls", category: "Appetizer", price: 5.99 },
  { name: "Paneer Curry", category: "Entree", price: 9.99 },
  { name: "Gulab Jamun", category: "Dessert", price: 3.99 },
  { name: "Mango Lassi", category: "Beverage", price: 2.99 },
  { name: "Fruit Salad", category: "Dessert", price: 4.50 }
];

let total = 0;
const totalEl = document.getElementById("total");
const menuItemsEl = document.getElementById("menu-items");

// Create menu cards
menu.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.innerHTML = `<strong>${item.name}</strong><br>${item.category}<br>$${item.price}`;
  
  card.addEventListener("click", () => {
    total += item.price;
    totalEl.textContent = total.toFixed(2);
    card.style.background = "#333";
    card.style.color = "white";
  });

  menuItemsEl.appendChild(card);
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", () => {
  total = 0;
  totalEl.textContent = total.toFixed(2);
  document.querySelectorAll(".menu-card").forEach(card => {
    card.style.background = "white";
    card.style.color = "#333";
  });
});

const button = document.getElementById("themeToggle");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    button.textContent = "Switch to Light Mode";
  } else {
    button.textContent = "Switch to Dark Mode";
  }
});
