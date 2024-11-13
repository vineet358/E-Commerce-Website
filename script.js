// Example products with id added
const products = [
    { id: 1, name: 'T-shirt', price: '$10', image: 'https://www.bing.com/images/search?view=detailV2&ccid=tHJA7sj4&id=36F251D106AC9EC1C2DADB30770C66B5AC3AEA4A&thid=OIP.tHJA7sj4pbIad2O-ESTOIAHaI0&mediaurl=https%3a%2f%2fi.pinimg.com%2f736x%2fe5%2f34%2fb6%2fe534b615e917b44129d86b28fa8a6a48.jpg&exph=876&expw=736&q=virat+kohli+jersey+pic&FORM=IRPRST&ck=FB3F82123C02D43CB32B37C1FF6D2CED&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0' },
    { id: 2, name: 'Jeans', price: '$20', image: 'https://via.placeholder.com/200?text=Jeans' },
    { id: 3, name: 'Shoes', price: '$30', image: 'https://via.placeholder.com/200?text=Shoes' },
    { id: 4, name: 'Watch', price: '$50', image: 'https://via.placeholder.com/200?text=Watch' }
];

// Load products into product area
function loadProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous products

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Display the specified section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; // Hide all sections
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    activeSection.style.display = "block"; // Display only the selected section

    // Load products if "Products" section is selected
    if (sectionId === 'products') {
        loadProducts();
    }
}

// Initial page load: Show "Home" section
document.addEventListener("DOMContentLoaded", () => showSection('home'));

// Search products by name
function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    loadProducts(filteredProducts);
}

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
    }
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    const cartItems = cart.map(item => `${item.name} - ${item.price}`).join("\n");
    alert(`Your cart items:\n${cartItems}`);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
        return;
    }
    alert("Thank you for your purchase!");
    cart = []; // Clear cart after checkout
}

function handleLogin(event) {
    event.preventDefault(); // Prevents form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // If login is successful (implement actual validation as required)
    if (username === "exampleUser" && password === "examplePass") {
        window.location.href = "index.html"; // Corrected redirection
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Initial display of products
loadProducts();
