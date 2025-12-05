let registerForm = document.getElementById("registerForm");

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError = document.getElementById("confirmPasswordError");

let summarySection = document.getElementById("summarySection");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let nameValue = nameInput.value;
    if (nameValue === "") {
        nameError.textContent = "Name is required!";
        return;
    }
    nameError.textContent = "";

    let emailValue = emailInput.value;
    if (emailValue === "") {
        emailError.textContent = "Email is required!";
        return;
    }
    if (!emailValue.includes("@")) {
        emailError.textContent = "Email must contain '@'";
        return;
    }
    emailError.textContent = "";

    let passwordValue = passwordInput.value;
    if (passwordValue === "") {
        passwordError.textContent = "Password is required!";
        return;
    }
    if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        return;
    }
    passwordError.textContent = "";

    let confirmPasswordValue = confirmPasswordInput.value;
    if (confirmPasswordValue === "") {
        confirmPasswordError.textContent = "Confirm your password!";
        return;
    }
    if (passwordValue !== confirmPasswordValue) {
        confirmPasswordError.textContent = "Passwords do not match!";
        return;
    }
    confirmPasswordError.textContent = "";

    summarySection.innerHTML = `
        <h3>Form Submitted Successfully</h3>
        <p><strong>Name:</strong> ${nameValue}</p>
        <p><strong>Email:</strong> ${emailValue}</p>
        <p><strong>Password:</strong> ${passwordValue}</p>
    `;
});

