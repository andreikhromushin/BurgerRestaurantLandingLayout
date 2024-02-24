"use strict";

// Smooth transition through navigation links
let links = document.querySelectorAll("nav a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
  };
}

// Transition to menu when pressing a button
document.getElementById("main-section-action").onclick = function() {
  document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
};

// Reset scroll on button click (transition to top of page)
const resetScrollButton = document.getElementById("resetScrollButton");
window.addEventListener("scroll", function() {
  if (window.scrollY >= window.innerHeight) {
    resetScrollButton.style.display = "block";
  } else {
    resetScrollButton.style.display = "none";
  }
});

resetScrollButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Transition to order form when press button from menu
let buttons = document.getElementsByClassName("menu-order-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    document.getElementById("order-section").scrollIntoView({ behavior: "smooth" });
  };
}

// Order form small validation
let orderInput = document.getElementById("order-input");
let nameInput = document.getElementById("name-input");
let phoneInput = document.getElementById("phone-input");
document.getElementById("order-section-action").onclick = function() {
  let hasError = false;

  [orderInput, nameInput, phoneInput].forEach(item => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [orderInput, nameInput, phoneInput].forEach(item => {
      item.value = "";
    });
    alert("\u2705");
  }
};

// Change current language on page
document.getElementById("change-language").onclick = function(e) {
  let currentLanguage = e.target.innerText;

  if (currentLanguage === "EN") {
    location.assign("index-ru.html");
  } else if (currentLanguage === "RU") {
    location.assign("index.html");
  }
};

// Change current currency on page
let prices = document.getElementsByClassName("menu-item-price");
document.getElementById("change-currency").onclick = function(e) {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 95;
  } else if (currentCurrency === "₽") {
    newCurrency = "AED";
    coefficient = 3.67;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(0) + " " + newCurrency;
  }
};