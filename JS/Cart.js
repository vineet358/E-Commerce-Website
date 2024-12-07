import products from './Product_List.js';

// Assume `cart` is persisted in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cache DOM elements
const cartList = document.getElementById("cart-list");
const searchInput = document.getElementById("search-input");

// Function to load cart items
function loadCartItems(filteredCart = cart) {
    cartList.innerHTML = ""; // Clear existing cart items
    if (filteredCart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty or no items match your search.</p>";
        return;
    }

    filteredCart.forEach(cartItem => {
        const { product, quantity } = cartItem;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productCard.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = product.name;
        productCard.appendChild(name);

        const price = document.createElement('p');
        price.textContent = `Price: ₹${product.price}`;
        productCard.appendChild(price);

        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-container');

        const minusButton = document.createElement('button');
        minusButton.textContent = "-";
        minusButton.classList.add('quantity-button');
        minusButton.setAttribute("data-id", product.id);
        quantityContainer.appendChild(minusButton);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = quantity;
        quantityDisplay.classList.add('quantity-display');
        quantityContainer.appendChild(quantityDisplay);

        const plusButton = document.createElement('button');
        plusButton.textContent = "+";
        plusButton.classList.add('quantity-button');
        plusButton.setAttribute("data-id", product.id);
        quantityContainer.appendChild(plusButton);

        productCard.appendChild(quantityContainer);
        cartList.appendChild(productCard);
    });
}

// Search in the cart
function searchCartItems() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCart = cart.filter(item =>
        item.product.name.toLowerCase().includes(searchTerm)
    );
    loadCartItems(filteredCart); // Reload cart with filtered items
}

// Update quantity in the cart
function updateQuantity(productId, action) {
    const cartItemIndex = cart.findIndex(item => item.product.id === Number(productId));
    if (cartItemIndex !== -1) {
        const cartItem = cart[cartItemIndex];
        if (action === "increase") {
            cartItem.quantity++;
        } else if (action === "decrease") {
            cartItem.quantity--;
            if (cartItem.quantity === 0) {
                cart.splice(cartItemIndex, 1);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
    }
}

// Event listeners for cart actions
document.addEventListener("DOMContentLoaded", () => {
    loadCartItems(); // Load initial cart items
    searchInput.addEventListener("input", searchCartItems);
    cartList.addEventListener("click", (event) => {
        if (event.target.classList.contains("quantity-button")) {
            const productId = event.target.getAttribute("data-id");
            const action = event.target.textContent === "+" ? "increase" : "decrease";
            updateQuantity(productId, action);
        }
    });
});