export class CheckForm {
    constructor() {
        this.icons = document.querySelectorAll(".show-hidden-icon");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.password2 = document.getElementById("password2");
        this.loginButton = document.getElementById("login-button");
        this.registerButton = document.getElementById("register-button");
        this.init();
    }

    init() {
        this.showOrHidePassword();
        this.formValid();
    }

    formValid() {
        // For Register Page
        if (this.registerButton) {
            this.registerButton.addEventListener("click", () => {
                this.checkRequired([this.email, this.password, this.password2]);
                this.checkLength(this.password, 6, 25);
                this.checkLength(this.password2, 6, 25);
                this.checkEmail();
                this.checkPasswordsMatch();
            });
        }
        // For Login Page
        if (this.loginButton) {
            this.loginButton.addEventListener("click", () => {
                this.checkRequired([this.email, this.password])
                this.checkLength(this.password, 6, 25)
                this.checkEmail()
            })
        }
    }

    // Check Empty inputs
    checkRequired(inputArr) {
        inputArr.forEach(input => {
            input.value === "" ? this.showError(input, `${this.getFieldName(input)} is required!`) : this.showSuccess(input);
        });
    }

    // Check Length --Global--
    checkLength(input, min, max) {
        input.value.length < min && this.showError(input, `${this.getFieldName(input)} must contain a min of ${min} characters`)
        input.value.length > max && this.showError(input, `${this.getFieldName(input)} must contain a max of ${max} characters`)
    }

    // First Letter to Uppercase
    getFieldName(input) {
        let id = input.id.charAt(0).toUpperCase() + input.id.slice(1);
        return id;
    }

    // Match passwords
    checkPasswordsMatch() {
        this.password.value.trim() !== this.password2.value.trim() && this.showError(this.password2, "Passwords doesn't match!");
    }

    // Email valid
    checkEmail() {
        let input = this.email;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        re.test(input.value.trim()) ? this.showSuccess : this.showError(input, "Email not valid")
    }

    // --Global-- Success Message
    showSuccess(input) {
        const formItem = input.parentElement.parentElement;
        formItem.className = "form-item success";
    }

    // --Global --Error Message
    showError(input, errorMessage) {
        const formItem = input.parentElement.parentElement;
        formItem.className = "form-item error";
        const small = formItem.querySelector("small")
        small.innerText = errorMessage;
    }

    // Eye icon in the form
    showOrHidePassword() {
        this.icons.forEach(icon => {
            icon.addEventListener("click", e => {
                let input = e.target.previousElementSibling;

                input.type === "password" ?
                    (input.type = "text", e.target.className = "fa fa-eye show-hidden-icon show") :
                    (input.type = "password", e.target.className = "fa fa-eye-slash show-hidden-icon")
            });
        });
    }
}
