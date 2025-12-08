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

nameInput.addEventListener("blur", function () {
    if (nameInput.value === "") {
        nameError.textContent = "Name is required!";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("blur", function () {
    let emailValue = emailInput.value;

    if (emailValue === "") {
        emailError.textContent = "Email is required!";
    } else if (!emailValue.includes("@")) {
        emailError.textContent = "Email must contain '@'";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener("blur", function () {
    let passwordValue = passwordInput.value;

    if (passwordValue === "") {
        passwordError.textContent = "Password is required!";
    } else if (passwordValue.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
    } else {
        passwordError.textContent = "";
    }
});

confirmPasswordInput.addEventListener("blur", function () {
    let passwordValue = passwordInput.value;
    let confirmValue = confirmPasswordInput.value;

    if (confirmValue === "") {
        confirmPasswordError.textContent = "Confirm your password!";
    } else if (passwordValue !== confirmValue) {
        confirmPasswordError.textContent = "Passwords do not match!";
    } else {
        confirmPasswordError.textContent = "";
    }
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    nameInput.blur();
    emailInput.blur();
    passwordInput.blur();
    confirmPasswordInput.blur();

    if (
        nameError.textContent !== "" ||
        emailError.textContent !== "" ||
        passwordError.textContent !== "" ||
        confirmPasswordError.textContent !== ""
    ) {
        return;
    }

    summarySection.innerHTML = `
        <h3>Form Submitted Successfully</h3>
        <p><strong>Name:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>Password:</strong> ${passwordInput.value}</p>
    `;
});

