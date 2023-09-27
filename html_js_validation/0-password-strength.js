function validatePassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    // Regular expressions for password criteria
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (
        password.length >= minLength &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        errorElement.textContent = "";
        return true; // Password meets all criteria
    } else {
        errorElement.textContent =
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
        return false; // Password does not meet all criteria
    }
}

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    if (!validatePassword()) {
        e.preventDefault(); // Prevent form submission if password is invalid
    }
});

