import products from './Product_List.js';

let cart = [];
let debounceTimer;

// Cache DOM elements
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const filterCategory = document.getElementById("filter-category");
const searchButton = document.getElementById("search-button");

// Define a variable to track how many products have been loaded
let productsLoaded = 0;
const productsPerLoad = 60; // Load 100 products at a time

// Function to load products
let currentPage = 1; // Start from the first page

// Function to load products with pagination
function loadProducts(filteredProducts = products) {
    productList.innerHTML = ""; // Clear the product list before loading new products

    // Calculate the number of products to display based on the current page and products per page
    const productsToDisplay = filteredProducts.slice((currentPage - 1) * productsPerLoad, currentPage * productsPerLoad);
    
    // Load only the products for the current page
    productsToDisplay.forEach(product => {
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

        const existingProduct = cart.find(item => item.product.id === product.id);

        if (existingProduct) {
            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('quantity-container');

            const minusButton = document.createElement('button');
            minusButton.classList.add('quantity-button');
            minusButton.textContent = "-";
            minusButton.addEventListener('click', () => updateQuantity(product.id, 'decrease'));

            const quantityDisplay = document.createElement('span');
            quantityDisplay.classList.add('quantity-display');
            quantityDisplay.textContent = existingProduct.quantity;

            const plusButton = document.createElement('button');
            plusButton.classList.add('quantity-button');
            plusButton.textContent = "+";
            plusButton.addEventListener('click', () => updateQuantity(product.id, 'increase'));

            quantityContainer.appendChild(minusButton);
            quantityContainer.appendChild(quantityDisplay);
            quantityContainer.appendChild(plusButton);

            productCard.appendChild(quantityContainer);
        } else {
            const button = document.createElement('button');
            button.textContent = "Add to Cart";
            button.setAttribute("data-id", product.id);
            button.addEventListener('click', () => addToCart(product.id));
            productCard.appendChild(button);
        }

        productList.appendChild(productCard);
    });

    // Create pagination buttons
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination-container');

    // Previous Page button
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.textContent = "Previous Page";
        prevButton.classList.add("page-button");
        prevButton.addEventListener('click', () => changePage(currentPage - 1));
        paginationContainer.appendChild(prevButton);
    }

    // Current Page button
    const currentPageButton = document.createElement('button');
    currentPageButton.textContent = `${currentPage}`;
    currentPageButton.classList.add("page-button", "current-page");
    paginationContainer.appendChild(currentPageButton);

    // Next Page button
    if (currentPage * productsPerLoad < filteredProducts.length) {
        const nextButton = document.createElement('button');
        nextButton.textContent = "Next Page";
        nextButton.classList.add("page-button");
        nextButton.addEventListener('click', () => changePage(currentPage + 1));
        paginationContainer.appendChild(nextButton);
    }

    productList.appendChild(paginationContainer);
}

// Function to handle page change (Previous/Next)
function changePage(page) {
    currentPage = page;
    const searchInputValue = searchInput.value.toLowerCase();
    const selectedCategory = filterCategory.value;
    const filteredProducts = filterProducts(searchInputValue, selectedCategory);
    loadProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    populateCategories();
    const selectedCategory = getCategoryFromURL();
    const filteredProducts = filterProducts("", selectedCategory);
    loadProducts(filteredProducts);
});

// Event listeners for search input and filter changes
searchInput.addEventListener("input", debounceSearch);
filterCategory.addEventListener("change", searchProducts);
searchButton.addEventListener("click", searchProducts);

// Populate the category dropdown dynamically
function populateCategories() {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    // Add "All" option at the start
    filterCategory.innerHTML = `<option value="all">All Categories</option>`;
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterCategory.appendChild(option);
    });

    // Set default value to 'All' or the category from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        filterCategory.value = categoryParam;
    } else {
        filterCategory.value = "all"; // Default value to 'All Categories'
    }
}

// Read URL parameters and apply filter
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category') || 'all'; // Default to 'all' if no category is passed
}

// Debounced search to avoid too many re-renders
function debounceSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(searchProducts, 300); // Wait 300ms after last input before triggering the search
}

// Search products based on input
function searchProducts() {
    const searchInputValue = searchInput.value.toLowerCase();
    const selectedCategory = filterCategory.value;
    const filteredProducts = filterProducts(searchInputValue, selectedCategory);
    loadProducts(filteredProducts);
}

// Filter products based on search term and category
function filterProducts(searchInputValue, selectedCategory) {
    return products.filter(product => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchInputValue);
        return matchesCategory && matchesSearch;
    });
}

// Add product to cart (Checking for duplicates and increasing quantity if already present)
function addToCart(productId) {
    const product = products.find(p => p.id === Number(productId));
    if (product) {
        // Check if product already exists in the cart
        const existingProduct = cart.find(item => item.product.id === product.id);
        if (existingProduct) {
            existingProduct.quantity++;
        } else cart.push({ product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
        loadProducts(); // Reload the product list to update the cart UI
    } else {
        alert("Product not found.");
    }
}

// Update the quantity of an item in the cart
function updateQuantity(productId, action) {
    const existingProduct = cart.find(item => item.product.id === productId);
    if (existingProduct) {
        if (action === 'increase') {
            existingProduct.quantity++;
        } else if (action === 'decrease') {
            existingProduct.quantity--;
        }
        if (existingProduct.quantity === 0) {
            const productIndex = cart.findIndex(item => item.product.id === productId);
            cart.splice(productIndex, 1); // Remove from cart
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        loadProducts(products); // Reload the product list to update the UI
    }
}