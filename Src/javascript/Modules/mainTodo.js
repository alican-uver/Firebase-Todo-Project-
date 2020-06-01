export class MainTodo {
    constructor(config) {
        //! Select Elements
        //Buttons
        this.showInputsButton = document.getElementById("detail-todo");
        this.addTodoButton = document.getElementById("add-todo");
        this.updateTodoButton = document.getElementById("update-todo");
        this.logoutButton = document.getElementById("logout-button");

        // UI Elements
        this.todoDetails = document.querySelector(".todo-center");
        this.todoBottom = document.querySelector(".todo-bottom");
        this.navbarEmail = document.getElementById("navbar-email");

        // Inputs and Selects
        this.selectAction = document.getElementById("select-action");
        this.selectDate = document.getElementById("select-date");
        this.inputTitle = document.getElementById("todo-title");
        this.inputDescription = document.getElementById("todo-description");

        //Firebase 
        this.config = firebase.initializeApp(config);
        this.currentUser = "";

        // Function to Run First
        this.init();
    }

    init() {
        this.showInputs();
        this.checkUserLogin();
    }


    animateCSS(element, animation, prefix = 'animate__') {
        const animationName = `${prefix}${animation}`;
        element.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd() {
            element.classList.remove(`${prefix}animated`, animationName);
            element.removeEventListener('animationend', handleAnimationEnd);
        }

        element.addEventListener('animationend', handleAnimationEnd);
    }

    showAlerts(type, message) {
        const alertDiv = document.querySelector(".alert");
        const span = document.createElement("span");
        span.className = `bg-${type}`
        span.innerText = message;
        alertDiv.appendChild(span);
        alertDiv.classList.remove("show");
        setTimeout(() => {
            alertDiv.classList.add("show");
            alertDiv.innerHTML = "";
        }, 1700);
    }

    // UI Functions
    showInputs() {
        this.showInputsButton.addEventListener("click", () => {
            this.todoDetails.classList.toggle("active");
            this.showInputsButton.classList.toggle("clicked");
            this.animateCSS(this.todoDetails, 'backInRight')
        })
    }

    addTodoToUI(title, description, action, date, todoKey) {
        this.todoBottom.innerHTML += `
        <div class="todo-item mt-2">
            <p class="todo-item-action text-capitalize" id="todo-action">${action}</p>
            <div class="todoTitleAndDescription">
                <p class="todo-item-title" id="todo-title">${title}</p>
                <small id="todo-description">${description}</small>
            </div>
            <p class="todo-item-date text-capitalize" id="todo-date">${date}</p>
            <div class="todo-item-icons">
                <i class="far fa-trash-alt delete-todo" data-key=${todoKey}></i>
                <i class="far fa-edit update-todo" data-update=${todoKey}></i>
            </div>
        </div>
        `
    }

    checkInputEmpty() {
        if (this.inputTitle.value !== "" &&
            this.inputDescription.value !== "" &&
            this.selectAction.value !== "" &&
            this.selectDate.value !== "") {
            return true;
        }
        else {
            this.animateCSS(this.todoDetails, 'shakeX')
            this.showAlerts("danger", "do not empty")
        }
    }

    clearInputs() {
        this.inputTitle.value = "";
        this.inputDescription.value = "";
    }
    // UI Functions End

    // Firebase Functions 
    checkUserLogin() {
        firebase.auth().onAuthStateChanged((user) => { //whatever user we logged in with, that user's information will come in.
            if (user) {
                this.currentUser = user.uid;
                this.navbarEmail.innerHTML = `User: ${user.email}`;
                this.logoutFirebase();
                this.addTodosToFirebase();
                this.getAllTodosFromFirebase();
            }
            else {
                window.location.href = "register.html";
            }
        })
    }

    //! function to capture todo on firebase by pressing update button
    getTodoFromFirebase(todoKey) {
        let todoRef = firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey)
        todoRef.once("value", snapShot => {
            console.log(snapShot.val())
            this.addAndUpdateDetailsBar(snapShot.val())
        })
    }

    //! pressing the update button will display the "todo.value" on the firebase
    addAndUpdateDetailsBar(todo) {
        this.selectAction.value = todo.action;
        this.inputTitle.value = todo.title;
        this.selectDate.value = todo.date;
        this.inputDescription.value = todo.description;
        this.todoDetails.classList.add("active"); // Open the details bar
        this.addTodoButton.classList.add("active");
        this.updateTodoButton.classList.remove("active");
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    addUpdatedTodoToFirebase(todoKey) {
        let listener = () => {
            firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey).update(this.allValues())
                .then(() => {
                    this.updateTodoButton.removeEventListener("click", listener);
                    this.updateTodoButton.classList.add("active");
                    this.addTodoButton.classList.remove("active");
                    this.clearInputs();
                    this.showAlerts("info", "todo updated!");
                });
        }
        this.updateTodoButton.addEventListener("click", listener);
    }

    updateTodoFromFirebase() {
        const updateTodoButtons = document.querySelectorAll(".update-todo");
        updateTodoButtons.forEach(button => {
            button.addEventListener("click", () => {
                let todoKey = button.dataset.update;
                this.getTodoFromFirebase(todoKey);
                this.addUpdatedTodoToFirebase(todoKey);
            })
        })
    }

    deleteTodoFromFirebase() {
        const deleteTodoButtons = document.querySelectorAll(".delete-todo");
        deleteTodoButtons.forEach(button => {
            button.addEventListener("click", () => {
                let todoKey = button.dataset.key;
                let item = button.parentElement.parentElement;
                this.animateCSS(item, 'backOutUp');
                setTimeout(() => {
                    firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey).remove()
                }, 1000);
            })
        });
    }

    getAllTodosFromFirebase() {
        let todoRef = firebase.database().ref("users/" + this.currentUser).child("todos");
        todoRef.on("value", snapShot => {
            this.clearInputs(); // This functions clear all inputs
            this.todoBottom.innerHTML = "";
            snapShot.forEach(item => {
                let todoKey = item.key;
                this.addTodoToUI(item.val().title, item.val().description, item.val().action, item.val().date, todoKey)
            });
            //this function should work here, because we can select the button after the html is dynamically generated
            this.deleteTodoFromFirebase();
            this.updateTodoFromFirebase();
        })
    }

    addTodosToFirebase() {
        this.addTodoButton.addEventListener("click", () => {
            if (this.checkInputEmpty()) {
                firebase.database().ref("/users").child(this.currentUser).child("todos").push(this.allValues())
                .then(() => {
                    this.showAlerts("success", "todo added!")
                })
            }
        })
    }

    // for firebase to-do add and to-do update operations
    allValues() {
        return {
            action: this.selectAction.value,
            date: this.selectDate.value,
            title: this.inputTitle.value,
            description: this.inputDescription.value
        }
    }

    //when the signOut button is pressed
    logoutFirebase() {
        this.logoutButton.addEventListener("click", () => {
            firebase.auth().signOut()
                .then(() => {
                    window.location.href = "login.html"
                }).catch((err) => {
                    console.log(err);
                });
        })
    }
}



