export class MainTodo {
    constructor(config) {
        //! Select Elements
        //Buttons
        this.detailTodo = document.getElementById("detail-todo");
        this.addTodo = document.getElementById("add-todo");
        this.editTodo = document.getElementById("edit-todo");
        this.deleteTodo = document.getElementById("delete-todo");
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
        this.init();
    }

    init() {
        this.showDetailTodo();
        this.getDetailValues();
        this.checkUserLogin();
    }

    // UI Functions
    showDetailTodo() {
        this.detailTodo.addEventListener("click", () => {
            this.todoDetails.classList.toggle("active");
            this.detailTodo.classList.toggle("clicked");
        })
    }

    getDetailValues() {
        this.addTodo.addEventListener("click", () => {
            const inputTitle = this.inputTitle.value;
            const inputDescription = this.inputDescription.value;
            const selectAction = this.selectAction.value;
            const selectDate = this.selectDate.value;

            // If all inputs are not empty 
            if (this.checkInputEmpty()) {
            this.addTodoToUI(inputTitle, inputDescription, selectAction, selectDate)
            };
        })
    }

    addTodoToUI(title, description, action, date) {
        this.todoBottom.innerHTML += `
        <div class="todo-item mt-2">
            <p class="todo-item-action" id="todo-action">${action}</p>
            <div class="todoTitleAndDescription">
                <p class="todo-item-title" id="todo-title">${title}</p>
                <small class="text-muted" id="todo-description">${description}</small>
            </div>
            <p class="todo-item-date" id="todo-date">${date}</p>
            <div class="todo-item-icons">
                <i class="far fa-trash-alt" id="delete-todo"></i>
                <i class="far fa-edit" id="edit-todo"></i>
            </div>
        </div>
        `
    }

    checkInputEmpty() {
        if (this.inputTitle.value !== "" && this.inputDescription.value !== "") {
            return true;
        }
    }

    // Firebase Functions 
    checkUserLogin() {
        firebase.auth().onAuthStateChanged((user) => { //whatever user we logged in with, that user's information will come in.
            if (user) {
                this.currentUser = user.uid;
                this.navbarEmail.innerHTML = `User: ${user.email}`;
                this.logoutFirebase();
                this.addTodosToFirebase();
            }
        })
    }


    addTodosToFirebase() {
        this.addTodo.addEventListener("click", () => {
            if (this.checkInputEmpty()) {
                firebase.database().ref("/users").child(this.currentUser).child("todos").push({
                    action: this.selectAction.value,
                    date: this.selectDate.value,
                    title: this.inputTitle.value,
                    description: this.inputDescription.value
                })                
            }
        })
    }

    logoutFirebase(){
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
