export class MainTodo {
    constructor(config) {
        //! Select Elements
        //Buttons
        this.detailTodo = document.getElementById("detail-todo");
        this.addTodo = document.getElementById("add-todo");
        this.updateTodo = document.getElementById("update-todo");
        this.editTodo = document.getElementById("edit-todo");
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
        this.updatedTodoKey = ""

        // Function to Run First
        this.init();
    }

    init() {
        this.showDetailTodo();
        this.checkUserLogin();
    }

    // UI Functions
    showDetailTodo() {
        this.detailTodo.addEventListener("click", () => {
            this.todoDetails.classList.toggle("active");
            this.detailTodo.classList.toggle("clicked");
        })
    }

    addTodoToUI(title, description, action, date, todoKey) {
        this.todoBottom.innerHTML += `
        <div class="todo-item mt-2">
            <p class="todo-item-action" id="todo-action">${action}</p>
            <div class="todoTitleAndDescription">
                <p class="todo-item-title" id="todo-title">${title}</p>
                <small class="text-muted" id="todo-description">${description}</small>
            </div>
            <p class="todo-item-date" id="todo-date">${date}</p>
            <div class="todo-item-icons">
                <i class="far fa-trash-alt delete-todo" data-key=${todoKey}></i>
                <i class="far fa-edit update-todo" data-update=${todoKey}></i>
            </div>
        </div>
        `
    }

    checkInputEmpty() {
        if (this.inputTitle.value !== "" && this.inputDescription.value !== "") {
            return true;
        }
    }

    clearInputs(){
        // this.inputTitle.value = "";
        // this.inputDescription.value = "";
        this.todoBottom.innerHTML = "";
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
        })
    }

    //! function to capture todo on firebase by pressing update button
    getTodoFromFirebase(todoKey) {
     const todoRef = firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey)
        console.log(todoRef)
      todoRef.on("value", snapShot => {
            console.log(snapShot.val())
            this.addAndUpdateDetailsBar(snapShot.val())
        })
    }
    //! pressing the update button will display the "todo.value" on the firebase
    addAndUpdateDetailsBar(todo) {
        this.selectAction.value = todo.action;
        this.inputTitle.value = todo.title;
        this.selectDate.value = todo.date;
        this.inputDescription.value = todo.description;
        // const updateTodoButton = document.getElementById("update-todo");
        this.todoDetails.classList.add("active"); // Open the details bar
        this.addTodo.classList.add("active");
        this.updateTodo.classList.remove("active");      
    }

    addUpdatedTodoToFirebase(todoKey) {
        console.log(todoKey)
        // if(todoKey.length) {
            this.updateTodo.addEventListener("click", () => {
                firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey).update({
                    action: this.selectAction.value,
                    date: this.selectDate.value,
                    title: this.inputTitle.value,
                    description: this.inputDescription.value
                })
            })
        // }
    }



    updateTodoFromFirebase() {
        const updateTodoButtons = document.querySelectorAll(".update-todo");
        updateTodoButtons.forEach(button => {
            button.addEventListener("click", () => {
                let todoKey = button.dataset.update;
                // this.updatedTodoKey = todoKey; // new
                this.addUpdatedTodoToFirebase(todoKey);
                this.getTodoFromFirebase(todoKey);
            })
        })
    }

    deleteTodoFromFirebase(){
        const deleteTodoButtons = document.querySelectorAll(".delete-todo");
        deleteTodoButtons.forEach(button => {
            button.addEventListener("click", () => {
                let todoKey = button.dataset.key;
                firebase.database().ref(`users/${this.currentUser}`).child("todos").child(todoKey).remove();
            })
        });
    }

    getAllTodosFromFirebase(){
        let todoRef = firebase.database().ref("users/" + this.currentUser).child("todos");
        todoRef.on("value", snapShot => {
            this.clearInputs(); // This functions clear all inputs and todocontainer
            snapShot.forEach(item => {
                let todoKey = item.key;
                this.todoKey = item.key;
                this.addTodoToUI(item.val().title, item.val().description, item.val().action, item.val().date, todoKey)            
            });
            //this function should work here, because we can select the button after the html is dynamically generated
            //! To do ! eğer  sadece çocuk eklenmişse update yap şeklinde bir blok yazmayı düşün . 
            this.deleteTodoFromFirebase();
            this.updateTodoFromFirebase();
        })
    }

    addTodosToFirebase() {
        this.addTodo.addEventListener("click", () => {
            if (this.checkInputEmpty()) {
                firebase.database().ref("/users").child(this.currentUser).child("todos").push({
                    // Created object format 
                    action: this.selectAction.value,
                    date: this.selectDate.value,
                    title: this.inputTitle.value,
                    description: this.inputDescription.value
                })                
            }
        })
    }

    //when the signOut button is pressed
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



