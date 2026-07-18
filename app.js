// Premium Product Dataset
const products = [
  {
    id: 1,
    name: "Homemade Hair Oil",
    category: "Hair",
    price: 99.00,
    volume: "60 ML",
    rating: 4.8,
    reviews: 84,
    badge: "Trial",
    image: "pictures/1 oil.png?v=3",
    description: "Made with 100% natural ingredients.<br><br><strong>Benefits:</strong><br>• Strengthen roots, reduces hair fall and breakage<br>• Nourishes scalp deeply and promotes growth<br>• Add shines and softness to every strand<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Organic Botanical Extracts",
    origin: "India",
    usage: "Dispense 3-4 drops between palms, massage gently into the scalp and through the ends of your hair."
  },
  {
    id: 2,
    name: "Homemade Hair Oil",
    category: "Hair",
    price: 179.00,
    volume: "100 ML",
    rating: 4.9,
    reviews: 142,
    badge: "Popular",
    image: "pictures/2 oil.png?v=3",
    description: "Made with 100% natural ingredients.<br><br><strong>Benefits:</strong><br>• Strengthen roots, reduces hair fall and breakage<br>• Nourishes scalp deeply and promotes growth<br>• Add shines and softness to every strand<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Organic Botanical Extracts",
    origin: "India",
    usage: "Dispense 3-4 drops between palms, massage gently into the scalp and through the ends of your hair."
  },
  {
    id: 3,
    name: "Homemade Hair Oil",
    category: "Hair",
    price: 449.00,
    volume: "300 ML",
    rating: 4.9,
    reviews: 215,
    badge: "Value Size",
    image: "pictures/3 oil.jpeg?v=3",
    description: "Made with 100% natural ingredients.<br><br><strong>Benefits:</strong><br>• Strengthen roots, reduces hair fall and breakage<br>• Nourishes scalp deeply and promotes growth<br>• Add shines and softness to every strand<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Organic Botanical Extracts",
    origin: "India",
    usage: "Dispense 3-4 drops between palms, massage gently into the scalp and through the ends of your hair."
  },
  {
    id: 4,
    name: "Golden Shampoo",
    category: "Hair",
    price: 149.00,
    volume: "100 ML",
    rating: 4.7,
    reviews: 56,
    badge: "Trial",
    image: "pictures/1 shampoo .png",
    description: "Made up of herbs and natural ingredients.<br><br><strong>Benefits:</strong><br>• Nourishes scalp deeply while cleansing<br>• Strengthen roots, reduces hair fall and breakage<br>• Add shines and softness instantly<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Aloe Vera Juice, Coco-glucoside, Botanical Extracts",
    origin: "India",
    usage: "Massage into wet hair, focusing on roots. Rinse thoroughly. Follow with your favorite oil."
  },
  {
    id: 5,
    name: "Golden Shampoo",
    category: "Hair",
    price: 249.00,
    volume: "200 ML",
    rating: 4.8,
    reviews: 98,
    badge: "Popular",
    image: "pictures/2 shampoo.png?v=3",
    description: "Made up of herbs and natural ingredients.<br><br><strong>Benefits:</strong><br>• Nourishes scalp deeply while cleansing<br>• Strengthen roots, reduces hair fall and breakage<br>• Add shines and softness instantly<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Aloe Vera Juice, Coco-glucoside, Botanical Extracts",
    origin: "India",
    usage: "Massage into wet hair, focusing on roots. Rinse thoroughly. Follow with your favorite oil."
  },
  {
    id: 6,
    name: "Golden Shampoo",
    category: "Hair",
    price: 399.00,
    volume: "300 ML",
    rating: 4.9,
    reviews: 134,
    badge: "Value Size",
    image: "pictures/3 shampoo.png?v=3",
    description: "Made up of herbs and natural ingredients.<br><br><strong>Benefits:</strong><br>• Nourishes scalp deeply while cleansing<br>• Strengthen roots, reduces hair fall and breakage<br>• Add shines and softness instantly<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "Aloe Vera Juice, Coco-glucoside, Botanical Extracts",
    origin: "India",
    usage: "Massage into wet hair, focusing on roots. Rinse thoroughly. Follow with your favorite oil."
  },
  {
    id: 7,
    name: "Mish Organic Henna",
    category: "Hair",
    price: 70.00,
    volume: "50 GM",
    rating: 4.8,
    reviews: 45,
    badge: "Trial",
    image: "pictures/1 henna.jpeg?v=3",
    description: "Made with organic natural ingredients.<br><br><strong>Benefits:</strong><br>• Strengthen roots, reduces hair fall and breakage<br>• Nourishes scalp deeply<br>• Add shines and softness naturally<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "100% Pure Lawsonia Inermis (Henna) Leaf Powder",
    origin: "India",
    usage: "Mix with water to form a paste. Apply to hair and leave for 2-3 hours before rinsing."
  },
  {
    id: 8,
    name: "Mish Organic Henna",
    category: "Hair",
    price: 120.00,
    volume: "100 GM",
    rating: 4.9,
    reviews: 210,
    badge: "Value Size",
    image: "pictures/2 henna.jpeg?v=3",
    description: "Made with organic natural ingredients.<br><br><strong>Benefits:</strong><br>• Strengthen roots, reduces hair fall and breakage<br>• Nourishes scalp deeply<br>• Add shines and softness naturally<br>• Safe and chemical free, suitable for all hair type",
    ingredients: "100% Pure Lawsonia Inermis (Henna) Leaf Powder",
    origin: "India",
    usage: "Mix with  water to form a paste. Apply to hair and leave for 2-3 hours before rinsing."
  }
];

// App State Management
let cart = JSON.parse(localStorage.getItem("mish_oil_cart")) || [];
let activeCategory = "all";
let searchQuery = "";
let currentSort = "default";

// DOM Elements
const header = document.getElementById("site-header");
const productGrid = document.getElementById("product-grid");
const categoryContainer = document.getElementById("filter-categories-container");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const navSearchBtn = document.getElementById("nav-search-btn");

// Cart Drawer Elements
const cartTrigger = document.getElementById("cart-drawer-trigger");
const cartOverlay = document.getElementById("cart-drawer-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartClose = document.getElementById("cart-drawer-close");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartEmptyState = document.getElementById("cart-empty-state");
const cartBadgeCount = document.getElementById("cart-badge-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartShipping = document.getElementById("cart-shipping");
const cartTotal = document.getElementById("cart-total");
const checkoutTriggerBtn = document.getElementById("checkout-trigger-btn");

// Product Modal Elements
const productModalOverlay = document.getElementById("product-modal-overlay");
const productModalClose = document.getElementById("product-modal-close");
const modalProductImg = document.getElementById("modal-product-img");
const modalProductTag = document.getElementById("modal-product-tag");
const modalProductTitle = document.getElementById("modal-product-title");
const modalProductRating = document.getElementById("modal-product-rating");
const modalProductVolume = document.getElementById("modal-product-volume");
const modalProductDesc = document.getElementById("modal-product-desc");
const modalSpecIngredients = document.getElementById("modal-spec-ingredients");
const modalSpecOrigin = document.getElementById("modal-spec-origin");
const modalSpecUsage = document.getElementById("modal-spec-usage");
const modalProductPrice = document.getElementById("modal-product-price");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");
let activeModalProductId = null;

// Checkout Modal Elements
const checkoutModalOverlay = document.getElementById("checkout-modal-overlay");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const checkoutFormView = document.getElementById("checkout-form-view");
const checkoutForm = document.getElementById("checkout-form");
const checkoutSuccessView = document.getElementById("checkout-success-view");
const checkoutStep1 = document.getElementById("checkout-step-1");
const checkoutStep2 = document.getElementById("checkout-step-2");
const paymentSubmitBtn = document.getElementById("payment-submit-btn");
const successEmail = document.getElementById("success-email");
const successCloseBtn = document.getElementById("success-close-btn");
const checkoutSubtotal = document.getElementById("checkout-subtotal");
const checkoutShipping = document.getElementById("checkout-shipping");
const checkoutTotal = document.getElementById("checkout-total");

// Toast Notification Container
const toastContainer = document.getElementById("toast-container");

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

/* ---------------------------------------------------- */
/* EVENT LISTENERS                                      */
/* ---------------------------------------------------- */

// Scroll Header Effects
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Navbar Toggle
mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const icon = mobileMenuBtn.querySelector("i");
  if (navMenu.classList.contains("open")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars-staggered";
  }
});

// Close Mobile Menu when link clicked
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    mobileMenuBtn.querySelector("i").className = "fa-solid fa-bars-staggered";
    
    // Manage active class
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Navigation Search shortcut focus
navSearchBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    searchInput.focus();
  }, 600);
});

// Catalog Filtering & Searching
categoryContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    activeCategory = e.target.dataset.category;
    renderCatalog();
  }
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim().toLowerCase();
  renderCatalog();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderCatalog();
});

// Cart Drawer toggling
cartTrigger.addEventListener("click", openCartDrawer);
cartClose.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

// Product Detail Modal closing
productModalClose.addEventListener("click", closeProductModal);
productModalOverlay.addEventListener("click", (e) => {
  if (e.target === productModalOverlay) closeProductModal();
});

// Modal Add to Cart Action
modalAddToCartBtn.addEventListener("click", () => {
  if (activeModalProductId) {
    addToCart(activeModalProductId);
    closeProductModal();
  }
});

// Checkout Modal toggling & form logic
checkoutTriggerBtn.addEventListener("click", openCheckoutModal);
checkoutModalClose.addEventListener("click", closeCheckoutModal);
checkoutModalOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutModalOverlay) closeCheckoutModal();
});

// Shipping & Payment Dynamic Logic
const shippingCityInput = document.getElementById("shipping-city");
const paymentMethodSelect = document.getElementById("payment-method");
const codWarning = document.getElementById("cod-warning");

function updateCheckoutTotals() {
  const sub = calculateSubtotal();
  let city = "";
  if(shippingCityInput) city = shippingCityInput.value.trim().toLowerCase();
  
  // Shipping logic: Kanpur = 50, else = 70
  let ship = 50; // default for Kanpur / empty
  if (city !== "kanpur" && city !== "") {
    ship = 70;
  }
  
  // COD logic
  if (paymentMethodSelect) {
    if (city !== "kanpur" && city !== "") {
      if (paymentMethodSelect.value === "cod") {
        paymentMethodSelect.value = "online";
        showToast("COD is only available in Kanpur. Switched to Online Payment.");
      }
      document.getElementById("cod-option").disabled = true;
      codWarning.style.display = "block";
    } else {
      document.getElementById("cod-option").disabled = false;
      codWarning.style.display = "none";
    }
  }
  
  const tot = sub + ship;
  checkoutSubtotal.innerText = `₹${sub.toFixed(2)}`;
  checkoutShipping.innerText = `₹${ship.toFixed(2)}`;
  checkoutTotal.innerText = `₹${tot.toFixed(2)}`;
}

if (shippingCityInput) {
  shippingCityInput.addEventListener("input", updateCheckoutTotals);
}
if (paymentMethodSelect) {
  paymentMethodSelect.addEventListener("change", updateCheckoutTotals);
}

// Shipping Info Submission (Transition to Mock Payment step or Complete)
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkoutStep1.classList.contains("active")) {
    if (paymentMethodSelect && paymentMethodSelect.value === "cod") {
      processMockOrder();
    } else {
      checkoutStep1.classList.remove("active");
      checkoutStep2.classList.add("active");
      showToast("Shipping information saved! Proceed to payment.");
    }
  }
});

function processMockOrder() {
  paymentSubmitBtn.disabled = true;
  paymentSubmitBtn.innerHTML = 'Processing Order <i class="fa-solid fa-spinner fa-spin"></i>';
  
  setTimeout(() => {
    // Generate WhatsApp Message
    const name = document.getElementById("shipping-name").value || "Customer";
    const address = document.getElementById("shipping-address").value || "";
    const city = document.getElementById("shipping-city").value || "";
    const zip = document.getElementById("shipping-zip").value || "";
    const paymentMethod = document.getElementById("payment-method").value;
    const isCOD = paymentMethod === "cod";
    
    let orderDetails = `🛍 *New Order from Mish Organics*\n\n`;
    orderDetails += `*Customer:* ${name}\n`;
    orderDetails += `*Address:* ${address}, ${city} - ${zip}\n`;
    orderDetails += `*Payment Method:* ${isCOD ? 'Cash on Delivery' : 'Online Payment'}\n\n`;
    orderDetails += `*Order Items:*\n`;
    
    cart.forEach(item => {
      orderDetails += `- ${item.quantity}x ${item.name} (${item.volume}) - ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    const sub = calculateSubtotal();
    let ship = 50;
    if (city.trim().toLowerCase() !== "kanpur" && city.trim() !== "") {
      ship = 100;
    }
    const tot = sub + ship;
    
    orderDetails += `\n*Subtotal:* ₹${sub.toFixed(2)}\n`;
    orderDetails += `*Shipping:* ₹${ship.toFixed(2)}\n`;
    orderDetails += `*Grand Total:* ₹${tot.toFixed(2)}\n`;
    
    const whatsappUrl = `https://wa.me/918299827171?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');

    successEmail.innerText = document.getElementById("shipping-email").value;
    
    checkoutFormView.style.display = "none";
    checkoutSuccessView.style.display = "block";
    
    // Clear shopping cart on mock order completion
    cart = [];
    updateCartUI();
    saveCartToStorage();
    
    showToast("Order placed successfully! Redirecting to WhatsApp...");
  }, 1500);
}

// QR Payment submit trigger
paymentSubmitBtn.addEventListener("click", () => {
  // Directly process order as they clicked "I have paid & Confirm Order"
  processMockOrder();
});

// Success Close Trigger
successCloseBtn.addEventListener("click", () => {
  closeCheckoutModal();
});

/* ---------------------------------------------------- */
/* LOGIC FUNCTIONS                                      */
/* ---------------------------------------------------- */

// Render Product Grid Catalog
function renderCatalog() {
  // Filter products by category & search input
  let filtered = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery) || 
                          product.description.toLowerCase().includes(searchQuery) ||
                          product.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (currentSort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Inject into grid
  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-hourglass-empty" style="font-size: 2.5rem; margin-bottom: 1rem; display: block; color: rgba(255,255,255,0.05);"></i>
        <p>No organic oils match your search or filter requirements.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card tilt-element">
      <div class="product-img-wrapper" onclick="openProductModal(${product.id})">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <img src="${product.image}" alt="${product.name} product bottle view">
        <div class="product-overlay">
          <button class="product-overlay-btn" title="Quick View" aria-label="Quick View of ${product.name}">
            <i class="fa-solid fa-expand"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span>${product.volume}</span>
          <span class="product-rating">
            <i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)}
          </span>
        </div>
        <h3 class="product-card-title" onclick="openProductModal(${product.id})">${product.name}</h3>
        <p class="product-card-desc">${product.description}</p>
        <div class="product-purchase">
          <div class="product-price">
            ₹${product.price.toFixed(2)}<span> / each</span>
          </div>
          <button class="btn-icon" onclick="addToCart(${product.id})" title="Add to Bag" aria-label="Add ${product.name} to Bag">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join("");
  
  // Re-initialize 3D Tilt for newly rendered elements
  if (typeof init3DTilt === 'function') {
    init3DTilt();
  }
}

// Open Detailed View Modal
function openProductModal(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  
  activeModalProductId = id;
  modalProductImg.src = product.image;
  modalProductImg.alt = product.name + " product image";
  modalProductTag.innerText = product.category + " care";
  modalProductTitle.innerText = product.name;
  modalProductRating.innerHTML = `<i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)} (${product.reviews} reviews)`;
  modalProductVolume.innerHTML = `<i class="fa-solid fa-droplet"></i> ${product.volume}`;
  modalProductDesc.innerHTML = product.description;
  modalSpecIngredients.innerText = product.ingredients;
  modalSpecOrigin.innerText = product.origin;
  modalSpecUsage.innerText = product.usage;
  modalProductPrice.innerHTML = `₹${product.price.toFixed(2)}<span> / each</span>`;
  
  productModalOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // disable background scrolling
}

// Close Detailed View Modal
function closeProductModal() {
  productModalOverlay.classList.remove("open");
  activeModalProductId = null;
  document.body.style.overflow = ""; // restore background scrolling
}

// Open Cart Drawer
function openCartDrawer() {
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close Cart Drawer
function closeCartDrawer() {
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// Open Checkout Modal
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Your cart is empty! Add products to checkout.");
    return;
  }
  
  // Initialize dynamic totals
  updateCheckoutTotals();
  
  // Reset steps
  checkoutStep1.classList.add("active");
  checkoutStep2.classList.remove("active");
  checkoutFormView.style.display = "block";
  checkoutSuccessView.style.display = "none";
  paymentSubmitBtn.disabled = false;
  paymentSubmitBtn.innerHTML = 'Pay & Confirm Order <i class="fa-solid fa-circle-check"></i>';
  
  // Close cart drawer first
  closeCartDrawer();
  
  checkoutModalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close Checkout Modal
function closeCheckoutModal() {
  checkoutModalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// Show Toast Alerts
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-info toast-icon"></i>
    <span class="toast-message">${message}</span>
  `;
  toastContainer.appendChild(toast);
  
  // Animate show
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// Cart State Logic
function applyCombos() {
  // Remove existing free items first
  cart = cart.filter(item => item.id !== 'free-brush');

  let comboShampooCount = 0;
  let comboOilCount = 0;
  let comboHennaCount = 0;

  cart.forEach(item => {
    const name = item.name.toLowerCase();
    const vol = item.volume.toLowerCase();
    if (name.includes('shampoo') && vol.includes('300')) comboShampooCount += item.quantity;
    if (name.includes('hair oil') && vol.includes('300')) comboOilCount += item.quantity;
    if (name.includes('henna') && vol.includes('100')) comboHennaCount += item.quantity;
  });

  const freeBrushes = Math.min(comboShampooCount, comboOilCount, comboHennaCount);

  if (freeBrushes > 0) {
    cart.push({
      id: 'free-brush',
      name: 'Free Hair Brush',
      price: 0,
      volume: 'Free Gift',
      image: 'pictures/WhatsApp Image 2026-07-10 at 7.00.03 PM.jpeg',
      quantity: freeBrushes,
      isGift: true
    });
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      volume: product.volume,
      image: product.image,
      quantity: 1
    });
  }
  
  applyCombos();
  updateCartUI();
  saveCartToStorage();
  showToast(`Added ${product.name} to your cart bag.`);
  
  // Animate cart badge pop
  cartBadgeCount.style.transform = "scale(1.3)";
  setTimeout(() => {
    cartBadgeCount.style.transform = "";
  }, 200);
}

function updateQuantity(productId, amount) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;
  
  cart[index].quantity += amount;
  
  if (cart[index].quantity <= 0) {
    const name = cart[index].name;
    cart.splice(index, 1);
    showToast(`Removed ${name} from your cart bag.`);
  } else {
    showToast(`Updated quantity for ${cart[index].name}.`);
  }
  
  applyCombos();
  updateCartUI();
  saveCartToStorage();
}

function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;
  
  const name = cart[index].name;
  cart.splice(index, 1);
  showToast(`Removed ${name} from your cart bag.`);
  
  applyCombos();
  updateCartUI();
  saveCartToStorage();
}

function calculateSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Update Cart DOM
function updateCartUI() {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update badge counts
  cartBadgeCount.innerText = itemCount;
  if (itemCount > 0) {
    cartBadgeCount.classList.add("has-items");
  } else {
    cartBadgeCount.classList.remove("has-items");
  }
  
  // Check empty state
  if (cart.length === 0) {
    cartEmptyState.style.display = "flex";
    // Clear items wrapper HTML
    const items = cartItemsContainer.querySelectorAll(".cart-item");
    items.forEach(el => el.remove());
    
    cartSubtotal.innerText = "₹0.00";
    cartShipping.innerText = "₹0.00";
    cartTotal.innerText = "₹0.00";
    checkoutTriggerBtn.disabled = true;
    return;
  }
  
  cartEmptyState.style.display = "none";
  checkoutTriggerBtn.disabled = false;
  
  // Calculate Totals
  const sub = calculateSubtotal();
  
  cartSubtotal.innerText = `₹${sub.toFixed(2)}`;
  cartShipping.innerText = `Calculated at checkout`;
  cartTotal.innerText = `₹${sub.toFixed(2)}`;
  
  // Render Item DOM elements
  // We match existings or clean rebuild
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name} thumb" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-volume">${item.volume}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-controller">
          ${item.isGift ? `<span class="quantity-val" style="margin: 0 auto; color: var(--accent-green);">FREE</span>` : `
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
          <span class="quantity-val">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
          `}
        </div>
        ${item.isGift ? '' : `<button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>`}
      </div>
    </div>
  `).join("");
}

// Local Storage Sync
function saveCartToStorage() {
  localStorage.setItem("mish_oil_cart", JSON.stringify(cart));
}

// Init Setup on Window Load
window.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
});

// Testimonials Read More Logic
const readMoreBtn = document.getElementById("read-more-reviews-btn");
if (readMoreBtn) {
  readMoreBtn.addEventListener("click", () => {
    const extraReviews = document.querySelectorAll(".extra-review");
    const isExpanded = readMoreBtn.innerText === "Show Less";
    
    extraReviews.forEach(review => {
      review.style.display = isExpanded ? "none" : "block";
    });
    
    readMoreBtn.innerText = isExpanded ? "Read More Reviews" : "Show Less";
  });
}

// Review Modal Elements
const reviewModalOverlay = document.getElementById("review-modal-overlay");
const reviewModalClose = document.getElementById("review-modal-close");
const reviewForm = document.getElementById("review-form");
const testimonialsGrid = document.getElementById("testimonials-grid");

// Give Review Button Logic
const giveReviewBtn = document.getElementById("give-review-btn");
if (giveReviewBtn) {
  giveReviewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(reviewModalOverlay) {
      reviewModalOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
}

// Close Review Modal
if (reviewModalClose) {
  reviewModalClose.addEventListener("click", () => {
    reviewModalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  });
}

if (reviewModalOverlay) {
  reviewModalOverlay.addEventListener("click", (e) => {
    if (e.target === reviewModalOverlay) {
      reviewModalOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// Handle Review Submission
if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("review-name").value;
    const rating = parseInt(document.getElementById("review-rating").value);
    const text = document.getElementById("review-text").value;
    
    let starsHtml = '';
    for(let i=0; i<5; i++) {
      if(i < rating) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
      }
    }
    
    const newReview = document.createElement("div");
    newReview.className = "review-card";
    
    // We add a subtle animation class or style to make it pop in
    newReview.style.animation = "fadeInUp 0.5s ease-out forwards";
    
    newReview.innerHTML = `
      <div class="review-stars">
        ${starsHtml}
      </div>
      <p class="review-text">"${text}"</p>
      <div class="review-author">- ${name}</div>
    `;
    
    if (testimonialsGrid) {
      testimonialsGrid.insertBefore(newReview, testimonialsGrid.firstChild);
    }
    
    reviewForm.reset();
    reviewModalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    
    showToast("Thank you! Your review has been posted.");
  });
}

// Placeholder Links Handler
document.querySelectorAll('a[href="#"]').forEach(link => {
  if (link.id !== "give-review-btn") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("This feature is currently disabled in the mockup.");
});
  }
});

// 3D Tilt Effect Initialization
function init3DTilt() {
  const elements = document.querySelectorAll('.tilt-element');
  elements.forEach(el => {
    el.onmousemove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateX = ((y - midY) / midY) * -10; // Max 10deg tilt
      const rotateY = ((x - midX) / midX) * 10;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    el.onmouseleave = () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };
  });
}

// Call on load for initial elements (like hero-image-container)
window.addEventListener("DOMContentLoaded", () => {
  init3DTilt();
});

