function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");

    // Clear any previous input fields
    inputContainer.innerHTML = "";

    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = "field" + i;
        input.placeholder = "Field " + i;
        inputContainer.appendChild(input);
    }
}

document.getElementById("numFields").addEventListener("change", function () {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

function validateForm() {
    const inputFields = document.querySelectorAll("#inputContainer input");
    const errorElement = document.getElementById("error");

    for (const inputField of inputFields) {
        if (inputField.value.trim() === "") {
            errorElement.textContent = "Please fill in all fields.";
            return false; // Field is empty
        }
    }

    errorElement.textContent = "";
    return true; // All fields are filled
}

document.getElementById("dynamicForm").addEventListener("submit", function (e) {
    if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if fields are empty
    }
});

