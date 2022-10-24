const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword");

// Email Validation
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); // adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); // removing invalid class if email value matched with emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcons => {
    eyeIcons.addEventListener("click", () => {
        const pInput = eyeIcons.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
            eyeIcons.classList.replace("bx-hide", "bx-show");
            return pInput.type = "text";
        }
        eyeIcons.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    })
})

// Password Validation
function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid"); // adding invalid class if password input value do not match with passPatern
    }
    passField.classList.remove("invalid"); // removing invalid class if password input value matched with passPatern
}

// Confirm Password Validation
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Calling Function on Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if (!emailField.classList.contains("invalid") && !passField.classList.contains("invalid") && !cPassField.classList.contains("invalid")) {
        location.href = form.getAttribute("action");
    }
})