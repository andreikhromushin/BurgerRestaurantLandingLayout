"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Smooth transition through navigation links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document
        .getElementById(link.getAttribute("data-link"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Transition to menu when pressing a button
  document
    .getElementById("main-section-action")
    .addEventListener("click", function () {
      document
        .getElementById("menu-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Reset scroll on button click (transition to top of page)
  const resetScrollButton = document.getElementById("resetScrollButton");
  window.addEventListener("scroll", function () {
    resetScrollButton.style.display =
      window.scrollY >= window.innerHeight ? "block" : "none";
  });

  resetScrollButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Transition to order form when press button from menu
  document.querySelectorAll(".menu-order-button").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .getElementById("order-section")
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Order form small validation
  document
    .getElementById("order-section-action")
    .addEventListener("click", function () {
      let hasError = false;
      const inputs = document.querySelectorAll(
        "#order-input, #name-input, #phone-input"
      );
      inputs.forEach((input) => {
        if (!input.value) {
          input.parentElement.style.background = "red";
          hasError = true;
        } else {
          input.parentElement.style.background = "";
        }
      });
      if (!hasError) {
        inputs.forEach((input) => (input.value = ""));
        alert("\u2705");
      }
    });

  // Change current language on page
  document
    .getElementById("change-language")
    .addEventListener("click", function (event) {
      const currentLanguage = event.target.innerText;
      const newLanguage =
        currentLanguage === "EN" ? "index-ru.html" : "index.html";
      location.assign(newLanguage);
    });

  // Change current currency on page
  const prices = document.getElementsByClassName("menu-item-price");
  document
    .getElementById("change-currency")
    .addEventListener("click", function (event) {
      const currentCurrency = event.target.innerText;
      let newCurrency, coefficient;
      switch (currentCurrency) {
        case "$":
          newCurrency = "₽";
          coefficient = 95;
          break;
        case "₽":
          newCurrency = "AED";
          coefficient = 3.67;
          break;
        default:
          newCurrency = "$";
          coefficient = 1;
      }
      event.target.innerText = newCurrency;
      Array.from(prices).forEach((price) => {
        const basePrice = parseFloat(price.getAttribute("data-base-price"));
        price.innerText = `${(basePrice * coefficient).toFixed(
          0
        )} ${newCurrency}`;
      });
    });
});
