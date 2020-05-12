// Show - Hide Password
const icons = document.querySelectorAll(".show-hidden-icon");
icons.forEach(icon => {
    icon.addEventListener("click", showOrHiddenPassword);
});

function showOrHiddenPassword(e) {
    let input = e.target.previousElementSibling;
    console.log(input)
    if (input.type === "password") {
        input.type = "text";
        e.target.className = "fa fa-eye show-hidden-icon show";
    }
    else {
        input.type = "password"
        e.target.className = "fa fa-eye-slash show-hidden-icon ";
    }
}

// Show - Hide Password End

// Check All Input Area
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkEmail(email);
    if (password2) { // For Login Screen
        checkPasswordsMatch(password, password2);
    }
});

function checkPasswordsMatch(passwordInput1, passwordInput2) {
    if (passwordInput1.value !== passwordInput2.value) {
        showError(passwordInput2, "Passwords doesn't match!")
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    }
    else {
        showError(input, "Email not valid")
    }
};

function showSuccess(input) {
    const formItem = input.parentElement.parentElement;
    formItem.className = "form-item success";
};

function showError(input, errorMessage) {
    const formItem = input.parentElement.parentElement;
    formItem.className = "form-item error";
    const small = formItem.querySelector("small")
    small.innerText = errorMessage;
};

// Check Input Area End


