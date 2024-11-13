function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "user" && password === "pass") {
        window.location.href = "indexx.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('active');
});