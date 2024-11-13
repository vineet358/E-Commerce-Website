
const products = [
    { id: 1, name: 'T-shirt', price: '10', image: 'https://i.pinimg.com/originals/0d/00/4a/0d004ad02a76669feced605f1abbd704.jpg' },
    { id: 2, name: 'Jeans', price: '20', image: 'https://th.bing.com/th/id/OIP.1ip3Ln1NctW3cYenhyDBiQAAAA?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Shoes', price: '30', image: 'https://ae01.alicdn.com/kf/HTB1USDwasfrK1RkSmLyq6xGApXa6/Ladies-Trainer-Shoes-for-Women-Designer-Sneakers-Women-s-Footware-Platform-Cushion-Flats-Walking-Shoes-Spring.jpg' },
    { id: 4, name: 'Watch', price: '50', image: 'https://thegentlemendiary.com/wp-content/uploads/2023/07/1713BM02_1.webp' }
];

function loadProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 

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


function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = "none"; // Hide all sections
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    activeSection.style.display = "block"; // Display only the selected section

   
    if (sectionId === 'products') {
        loadProducts();
    }
}
document.addEventListener("DOMContentLoaded", () => showSection('home'));


function searchProducts() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput)
    );
    loadProducts(filteredProducts);
}

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

   
    if (username === "exampleUser" && password === "examplePass") {
        window.location.href = "index.html"; // Corrected redirection
    } else {
        alert("Invalid username or password. Please try again.");
    }
}


loadProducts();
