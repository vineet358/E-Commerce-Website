// Load Header
function loadHeader() {
     fetch(`header.html`)
          .then(response => response.text())
          .then(data => {
               document.getElementById('header-container').innerHTML = data;
          })
          .catch(error => console.error('Error loading header:', error));
}

// Load Footer
function loadFooter() {
     fetch(`footer.html`)
          .then(response => response.text())
          .then(data => {
               document.getElementById('footer-container').innerHTML = data;
          })
          .catch(error => console.error('Error loading footer:', error));
}

// Call the functions on page load
document.addEventListener('DOMContentLoaded', () => {
     loadHeader();
     loadFooter();
});