function handleFormSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("error");

    if (name.trim() === "" || email.trim() === "") {
        errorElement.textContent = "Please fill in all required fields.";
    } else {
        // Clear any previous error messages
        errorElement.textContent = "";

        // Perform form submission or further processing here
        // Display a success message if needed
        console.log("Form submitted successfully!");
    }
}

document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);

