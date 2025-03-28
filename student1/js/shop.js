const cartIcon = document.getElementById("cart-icon");
const checkoutColumn = document.getElementById("checkout-column");
const checkoutColumnCloseBtn = document.getElementById(
  "checkout-column-close-btn"
);
const stationeryItemsContainer = document.getElementById("shop-product-items");
const cartList = document.getElementById("cart-list");

const checkoutColumnCheckoutBtn = document.getElementById(
  "checkout-column-checkout-btn"
);
const checkoutPreviewWrapper = document.getElementById(
  "checkout-preview-wrapper"
);
const checkoutDetails = document.getElementById("checkout-details");
const checkoutSummaryItems = document.getElementById("checkout-summary-items");
const checkoutSummaryPrice = document.getElementById("checkout-summary-price");

const clearCartBtn = document.getElementById("clear-cart-btn");

const checkoutPaymentFormClearBtn = document.getElementById(
  "checkout-payment-form-clear-btn"
);
const checkoutPaymentForm = document.getElementById("checkout-payment-form");

const checkoutBillingDetailsForm = document.getElementById(
  "checkout-billing-details-form"
);
const checkoutBillingFormClearBtn = document.getElementById(
  "checkout-billing-form-clear-btn"
);

const checkoutUserDetailsForm = document.getElementById(
  "checkout-user-details-form"
);
const checkoutUserFormClearBtntn = document.getElementById(
  "checkout-user-form-clear-btn"
);

const payBtn = document.getElementById("pay-btn");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const cardNumber = document.getElementById("card-number");
const cardHolderName = document.getElementById("card-holder-name");
const cardExpiry = document.getElementById("card_expiry");
const ccv = document.getElementById("ccv");

const address = document.getElementById("address");
const town = document.getElementById("town");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");

const fName = document.getElementById("f-name");
const sName = document.getElementById("s-name");
const mNumber = document.getElementById("m-number");
const email = document.getElementById("email");


var totalPrice = 0;
var numberOfItems = 0;

var shopItems = [
  {
    id: 1,
    name: "ICT Student's Book",
    price: 30,
    img: "images/shop-image-1.jpg",
  },
  {
    id: 2,
    name: "Fundamentals of Mathematics",
    price: 28,
    img: "images/shop-image-2.jpg",
  },
  {
    id: 3,
    name: "English Student's Book",
    price: 25,
    img: "images/shop-image-3.jpg",
  },
  {
    id: 4,
    name: "Business Management",
    price: 35,
    img: "images/shop-image-4.jpg",
  },
  {
    id: 5,
    name: "ICT Online Course",
    price: 60,
    img: "images/shop-image-5.jpeg",
  },
  {
    id: 6,
    name: "Amaizing Style",
    price: 40,
    img: "images/shop-image-6.jpg",
  },
  {
    id: 7,
    name: "Recycling Notebook",
    price: 10,
    img: "images/shop-image-7.png",
  },
  {
    id: 8,
    name: "Notebook",
    price: 7,
    img: "images/shop-image-8.png",
  },
  {
    id: 9,
    name: "Scientific Calculator",
    price: 25,
    img: "images/shop-image-9.png",
  },
  {
    id: 10,
    name: "Calculator",
    price: 18,
    img: "images/shop-image-10.png",
  },
  {
    id: 11,
    name: "Backpack (Black)",
    price: 30,
    img: "images/shop-image-11.png",
  },
  {
    id: 12,
    name: "Kids Backpack",
    price: 25,
    img: "images/shop-image-12.png",
  },
  {
    id: 13,
    name: "Pen & Pencil Case",
    price: 16,
    img: "images/shop-image-13.png",
  },
  {
    id: 14,
    name: "Pen & Pencil Case",
    price: 10,
    img: "images/shop-image-14.png",
  },
  {
    id: 15,
    name: "Ballpoint Pens 4pcs",
    price: 5,
    img: "images/shop-image-15.png",
  },
  {
    id: 16,
    name: "Highlighter Pen 6pcs",
    price: 10,
    img: "images/shop-image-16.png",
  },
  {
    id: 17,
    name: "Marker Pen 10pcs",
    price: 10,
    img: "images/shop-image-17.png",
  },
];

var cart = [];

function createShopItem(item) {
  const shopItem = document.createElement("div");
  shopItem.classList.add("shop-item");
  shopItem.setAttribute("data-id", item.id);
  shopItem.innerHTML = `
      <img src="${item.img}" alt="img" class="item-img">
      <h1 class="item-name">${item.name}</h1>
      <h1 class="item-price">$${item.price}</h1>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;

  const addToCartBtn = shopItem.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", () => {
    addToCart(item);
  });

  return shopItem;
}

function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    existingItem.qty++;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      qty: 1,
      unitPrice: item.price,
    });
  }

  refreshCart();
}

function refreshCart() {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = createCartItem(item);
    cartList.appendChild(cartItem);
  });

  updateTotalPrice();
}

function updateTotalPrice() {
  if (cart.length === 0) {
    totalPrice = 0;
    numberOfItems = 0;
  } else {
    totalPrice = cart.reduce(
      (total, item) => total + item.qty * item.unitPrice,
      0
    );
    numberOfItems = cart.reduce((total, item) => total + item.qty, 0);
  }
  document.getElementById("checkout-total-price").textContent =
    "Total Price: $" + totalPrice;
  document.getElementById("cart-icon").querySelector("span").textContent =
    numberOfItems;
}

function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-total-price">$${item.qty * item.unitPrice}</div>
      <div class="quantity">
      <button class="sub"><</button>
      <div class="qty">${item.qty}</div>
      <button class="add">></button>
    </div>  
    `;

  const subBtn = cartItem.querySelector(".sub");
  const addBtn = cartItem.querySelector(".add");
  const qtyElement = cartItem.querySelector(".qty");

  subBtn.addEventListener("click", () => {
    item.qty--;
    if (item.qty <= 0) {
      cart.splice(cart.indexOf(item), 1);
      cartList.removeChild(cartItem);
    } else {
      qtyElement.textContent = item.qty;
      cartItem.querySelector(".cart-item-total-price").textContent =
        item.qty * item.unitPrice;
    }
    refreshCart();
  });

  addBtn.addEventListener("click", () => {
    item.qty++;
    qtyElement.textContent = item.qty;
    cartItem.querySelector(".cart-item-total-price").textContent =
      item.qty * item.unitPrice;
    updateTotalPrice();
  });

  return cartItem;
}

cartIcon.addEventListener("click", () => {
  checkoutColumn.style.display = "flex";
  checkoutColumn.classList.add("show");
});

checkoutColumnCloseBtn.addEventListener("click", () => {
  checkoutColumn.classList.remove("show");
  checkoutColumn.classList.add("close");
});

checkoutColumn.addEventListener("animationend", () => {
  if (checkoutColumn.classList.contains("close")) {
    checkoutColumn.style.display = "none";
    checkoutColumn.classList.remove("close");
  }
});

shopItems.forEach((item) => {
  const shopItem = createShopItem(item);
  stationeryItemsContainer.appendChild(shopItem);
});

checkoutColumnCheckoutBtn.addEventListener("click", () => {
  if (totalPrice != 0) {
    displayCheckoutSummary();
  } else {
    alert("Checkout cannot proceed without adding items to the cart.");
  }
});

function displayCheckoutSummary() {
  checkoutDetails.innerHTML = "";

  cart.forEach((item) => {
    const checkoutItem = document.createElement("div");
    checkoutItem.classList.add("checkout-item");
    checkoutItem.innerHTML = `
      <div class="checkout-item-name">${item.name}</div>
      <div class="checkout-item-qty">${item.qty}</div>
      <div class="checkout-item-total-price">$${item.qty * item.unitPrice}</div>
    `;
    checkoutDetails.appendChild(checkoutItem);
  });

  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.unitPrice,
    0
  );

  checkoutSummaryItems.textContent = totalItems;
  checkoutSummaryPrice.textContent = "$"+totalPrice;

  checkoutPreviewWrapper.style.display = "flex";
}

document.getElementById("back-btn").addEventListener("click", () => {
  checkoutPreviewWrapper.style.display = "none";
});

function generateRandomRefNumber() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 8;
  let refNumber = "";
  for (let i = 0; i < length; i++) {
    refNumber += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return refNumber;
}

const refNumber = generateRandomRefNumber();

clearCartBtn.addEventListener("click", () => {
  cart = [];
  refreshCart();
});


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
const minDate = `${currentYear}-${currentMonth}`;
document.getElementById("card_expiry").setAttribute("min", minDate);


checkoutPaymentFormClearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkoutPaymentForm.reset();
});

checkoutBillingFormClearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkoutBillingDetailsForm.reset();
});

checkoutUserFormClearBtntn.addEventListener("click", (e) => {
  e.preventDefault();
  checkoutUserDetailsForm.reset();
});

function validateForm() {
  const errors = [];

  if (!visa.checked && !master.checked) {
    document.getElementById("card-type-container").style.border =
      "solid 1px red";
    errors.push("Please select a card type.");
  } else {
    document.getElementById("card-type-container").style.border = "none";
  }

  if (cardNumber.value.trim() === "") {
    document.getElementById("card-number-wrapper").style.border =
      "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("card-number-wrapper").style.border = "none";
  }

  if (cardHolderName.value.trim() === "") {
    document.getElementById("card-holder-name-wrapper").style.border =
      "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("card-holder-name-wrapper").style.border = "none";
  }

  if (cardExpiry.value.trim() === "") {
    document.getElementById("card-expire-wrapper").style.border =
      "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("card-expire-wrapper").style.border = "none";
  }

  if (ccv.value.trim() === "") {
    document.getElementById("card-ccv-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a CVV number.");
  } else if (ccv.value.trim().length !== 3 || isNaN(ccv.value.trim())) {
    document.getElementById("card-ccv-wrapper").style.border = "solid 1px red";
    errors.push("CVV must be a 3-digit number.");
  } else {
    document.getElementById("card-ccv-wrapper").style.border = "none";
  }

  if (address.value.trim() === "") {
    document.getElementById("address-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("address-wrapper").style.border = "none";
  }

  if (town.value.trim() === "") {
    document.getElementById("town-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("town-wrapper").style.border = "none";
  }

  if (country.value.trim() === "") {
    document.getElementById("country-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("country-wrapper").style.border = "none";
  }

  if (zipCode.value.trim() === "") {
    document.getElementById("postal-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("postal-wrapper").style.border = "none";
  }

  if (fName.value.trim() === "") {
    document.getElementById("fname-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("fname-wrapper").style.border = "none";
  }

  if (sName.value.trim() === "") {
    document.getElementById("surename-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else {
    document.getElementById("surename-wrapper").style.border = "none";
  }

  if (mNumber.value.trim() === "") {
    document.getElementById("number-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a card number.");
  } else if (
    mNumber.value.trim().length !== 10 ||
    isNaN(mNumber.value.trim())
  ) {
    document.getElementById("number-wrapper").style.border = "solid 1px red";
    errors.push("Card number must be a 10-digit number.");
  } else {
    document.getElementById("number-wrapper").style.border = "none";
  }

  if (email.value.trim() === "") {
    document.getElementById("email-wrapper").style.border = "solid 1px red";
    errors.push("Please enter an email address.");
  } else if (!isValidEmail(email.value.trim())) {
    document.getElementById("email-wrapper").style.border = "solid 1px red";
    errors.push("Please enter a valid email address.");
  } else {
    document.getElementById("email-wrapper").style.border = "none";
  }

  return errors;
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

payBtn.addEventListener("click", () => {
  const errors = validateForm();

  if (errors.length > 0) {
    // alert(errors.join("\n"));
  } else {
    alert("Payment successfull!");
  }
});
