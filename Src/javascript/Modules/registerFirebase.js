export class RegisterFirebase {
    constructor() {
        // Firebase Config
        let firebaseConfig = {
            apiKey: "AIzaSyAsEJwJXyjb9bJ1zfu_FTBvADgAqCaw4qo",
            authDomain: "todo-app-36b5c.firebaseapp.com",
            databaseURL: "https://todo-app-36b5c.firebaseio.com",
            projectId: "todo-app-36b5c",
            storageBucket: "todo-app-36b5c.appspot.com",
            messagingSenderId: "370374245151",
            appId: "1:370374245151:web:35802084848872d3c78e2a",
            measurementId: "G-40MS5J1MJ5"
        };
        firebase.initializeApp(firebaseConfig);
        // Select Elements 
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.registerButton = document.getElementById("register-button");
        this.goLoginPageBtn = document.getElementById("go-login-page");
        this.init()
    }

    init() {
        this.registerFirebase();
    }

    registerFirebase(){
        this.registerButton.addEventListener("click", () => {
            firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(() => {
                console.log("register is success!")
            })
            .catch(err => console.log(err))
        });
    }
}