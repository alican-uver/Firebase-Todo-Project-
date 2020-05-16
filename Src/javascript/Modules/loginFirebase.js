export class LoginFirebase {
    constructor(config) {
        this.config = firebase.initializeApp(config);

        this.password = document.getElementById("password");
        this.loginBtn = document.getElementById("login-button");
        this.email = document.getElementById("email");
        this.init();
    }

    init(){
        this.loginFirebase();
    }

    loginFirebase() {
        this.loginBtn.addEventListener("click", () => {
            firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                window.location.href = "index.html";
            }) 
            .catch(err => console.log(err));
        })
    }
}