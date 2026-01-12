// Select all elements
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const heartBtns = document.querySelectorAll(".fa-heart");
const totalPrice = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let total = 0;
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  totalPrice.textContent = total + " $";
}

// Increase quantity
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal();
  });
});

// Decrease quantity
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotal();
    }
  });
});

// Delete product
deleteBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.closest(".card-body").remove();
    updateTotal();
  });
});

// Like (heart) toggle
heartBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("liked");
    if (this.classList.contains("liked")) {
      this.style.color = "red";
    } else {
      this.style.color = "black";
    }
  });
});