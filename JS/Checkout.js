let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const confirmOrderButton = document.getElementById('confirm-order');

// Load Cart Summary
function loadCartSummary() {
    cartItems.innerHTML = ""; // Clear existing items
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const { product, quantity } = item;

        // Create product card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        productCard.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = product.name;
        productCard.appendChild(name);

        const quantityDisplay = document.createElement('p');
        quantityDisplay.textContent = `Quantity: ${quantity}`;
        productCard.appendChild(quantityDisplay);
        
        const totalPrice = document.createElement('p');
        totalPrice.textContent = `Total Price: $${(product.price * quantity).toFixed(2)}`;
        productCard.appendChild(totalPrice);

        cartItems.appendChild(productCard);

        // Update the total price
        total += product.price * quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Handle Order Confirmation
function handleOrderConfirmation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!name || !email || !phone || !address) {
        alert("Please fill out all required fields.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const orderDetails = {
        name,
        email,
        phone,
        address,
        cart,
        total: total,
    };

    // Store order details in localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Simulate order placement
    alert("Order placed successfully!");
    console.log("Order Details:", orderDetails);

    // Clear the cart and localStorage
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the Thank You page
    location.href = "thankyou.html";
}

// Event Listeners
document.addEventListener('DOMContentLoaded', loadCartSummary);
confirmOrderButton.addEventListener('click', handleOrderConfirmation);