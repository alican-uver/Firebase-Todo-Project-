export class RegisterFirebase {
    constructor(config) {
        // Firebase Config
        this.config = firebase.initializeApp(config);
        
        // Select Elements 
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.password2 = document.getElementById("password2");
        this.registerButton = document.getElementById("register-button");
        this.goLoginPageBtn = document.getElementById("go-login-page");
        this.init()
    };

    init() {
        this.registerFirebase()
    };

    registerFirebase() {
            this.registerButton.addEventListener("click", () => {
                firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
                    // if success the create account process
                    .then(() => {
                        firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
                        // if success the login process
                        .then(() => {
                            window.location.href = "index.html"
                        })
                    })
                    .catch(err => console.log(err))
            })
    };
}