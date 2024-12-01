let captchaText = "";

// Function to generate CAPTCHA
function generateCaptcha() {
    const canvas = document.getElementById("captchaCanvas");
    const fallbackContainer = document.getElementById("captchaFallback");

    if (!canvas || !canvas.getContext) {
        fallbackContainer.style.display = "block";
        fallbackContainer.textContent = Math.random().toString(36).substring(2, 8).toUpperCase();
        captchaText = fallbackContainer.textContent;
        return;
    }

    fallbackContainer.style.display = "none";
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    captchaText = Math.random().toString(36).substring(2, 8).toUpperCase();

    ctx.font = "25px Arial";
    ctx.fillStyle = "#333";
    ctx.fillText(captchaText, 10, 35);

    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = "#888";
        ctx.stroke();
    }
}

// Function to validate CAPTCHA input
function validateCaptcha(userInput) {
    return userInput === captchaText;
}

// Handle login submission
function handleLogin(event) {
    event.preventDefault();

    // Clear previous error styles
    clearErrorStyles();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const captchaInput = document.getElementById("captchaInput");

    const usernameValue = username.value;
    const passwordValue = password.value;
    const captchaValue = captchaInput.value;

    let hasError = false;

    // Validate CAPTCHA
    if (!validateCaptcha(captchaValue)) {
        showError(captchaInput, "Incorrect Captcha.");
        generateCaptcha(); // Reset CAPTCHA
        hasError = true;
    }

    // Validate username and password
    if (usernameValue === "") {
        showError(username, "Please enter your username.");
        hasError = true;
    }
    if (passwordValue === "") {
        showError(password, "Please enter your password.");
        hasError = true;
    }

    if (!hasError) {
        if (usernameValue === "user" && passwordValue === "pass") {
            window.location.href = "HTML/index.html"; // Redirect to dashboard
        } else {
            showError(username, "Invalid username or password."); // Assuming error on username for general feedback
        }
    }
}

// Utility function to show error
function showError(inputElement, message) {
    inputElement.style.borderColor = "red";
    inputElement.style.color = "red";
    const errorMessage = document.createElement("div");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "12px";
    errorMessage.classList.add("error-message");
    inputElement.parentElement.appendChild(errorMessage);
}

// Utility function to clear all error styles and messages
function clearErrorStyles() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.style.borderColor = "";
        input.style.color = "";
    });
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());
}

// Add event listener for refreshing CAPTCHA
const refreshButton = document.getElementById("refreshCaptcha");
if (refreshButton) {
    refreshButton.addEventListener("click", generateCaptcha);
}

// Initialize CAPTCHA on page load
window.onload = generateCaptcha;