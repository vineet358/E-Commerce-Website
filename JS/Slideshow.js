import products from './Product_List.js';

document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;

    // Function to show a specific slide
    function showSlides(index) {
        const slides = document.querySelectorAll('.mySlides');
        const dots = document.querySelectorAll('.dot');

        // Reset index if it goes out of bounds
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        // Hide all slides and remove "active" class from dots
        slides.forEach(slide => (slide.style.display = "none"));

        // Show the current slide and mark the corresponding dot as active
        slides[slideIndex].style.display = "block";
    }

    // Navigate to the next or previous slide
    function plusSlides(step) {
        slideIndex += step;
        showSlides(slideIndex);
    }

    // Navigate to a specific slide
    function currentSlide(index) {
        slideIndex = index;
        showSlides(slideIndex);
    }

    // Auto-play functionality
    let autoPlayTimer;
    function autoPlaySlides() {
        autoPlayTimer = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 5000); // Change slide every 5 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // Initialize slideshow
    showSlides(slideIndex);
    autoPlaySlides();

    // Attach event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', () => {
        stopAutoPlay();
        plusSlides(-1);
    });
    document.querySelector('.next').addEventListener('click', () => {
        stopAutoPlay();
        plusSlides(1);
    });

    // Function to dynamically load categories
    function loadCategories() {
        const categoryList = document.getElementById("category-list");
        if (!categoryList) return;

        // Get unique categories from products (assuming products is already imported)
        const uniqueCategories = [...new Set(products.map(product => product.category))];

        // Clear the category list (if necessary)
        categoryList.innerHTML = "";

        // Create a card for each category
        uniqueCategories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.classList.add('product-card');

            // Add category image (replace with appropriate logic if images vary per category)
            const img = document.createElement('img');
            img.src = `../docs/Categories/${category}.jpeg`;
            img.alt = `${category}`;
            categoryCard.appendChild(img);

            // Add category title and description
            const categoryContent = document.createElement('div');
            categoryContent.classList.add('category-content');

            const title = document.createElement('h3');
            title.textContent = category;
            categoryContent.appendChild(title);

            const description = document.createElement('p');
            description.textContent = `Explore our wide range of ${category} products.`; // Replace with dynamic descriptions if available
            categoryContent.appendChild(description);

            categoryCard.appendChild(categoryContent);

            // Add a click event to navigate to products page with the category
            categoryCard.addEventListener('click', () => {
                window.location.href = `product.html?category=${encodeURIComponent(category)}`;
            });            

            // Append the category card to the container
            categoryList.appendChild(categoryCard);
        });
    }

    // Call this function to load categories after page load
    loadCategories();
});