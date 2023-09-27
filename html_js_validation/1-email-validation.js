function validateEmail() {
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("error");

    // Regular expression for email format validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
        errorElement.textContent = "";
        return true; // Email format is valid
    } else {
        errorElement.textContent = "Please enter a valid email address.";
        return false; // Email format is invalid
    }
}

document.getElementById("emailForm").addEventListener("submit", function (e) {
    if (!validateEmail()) {
        e.preventDefault(); // Prevent form submission if email is invalid
    }
});

