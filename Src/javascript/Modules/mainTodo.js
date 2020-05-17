export class MainTodo {
    constructor() {
        //! Select Elements
        //Buttons
        this.detailTodo = document.getElementById("detail-todo")
        this.addTodo = document.getElementById("add-todo")
        this.editTodo = document.getElementById("edit-todo")
        this.deleteTodo = document.getElementById("delete-todo")

        // Positions of todo UI
        this.todoDetails = document.querySelector(".todo-center");
        this.todoBottom = document.querySelector(".todo-bottom");

        // Inputs and Selects
        this.selectAction = document.getElementById("select-action");
        this.selectDate = document.getElementById("select-date");
        this.inputTitle = document.getElementById("todo-title");
        this.inputDescription = document.getElementById("todo-description");


        this.init();
    }

    init() {
        this.showDetailTodo();
        this.getDetailValues();
    }

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
            this.addTodoToUI(inputTitle, inputDescription, selectAction, selectDate);
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
}
