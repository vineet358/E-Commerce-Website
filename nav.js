function handleLogin(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get values of username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (for demo purposes; replace with actual validation logic)
    if (username === "user" && password === "pass") {
        // Redirect to the main e-commerce page if login is successful
        window.location.href = "indexx.html";
    } else {
        // Alert for invalid login
        alert("Invalid username or password. Please try again.");
    }
}