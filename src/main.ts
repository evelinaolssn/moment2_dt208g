import './style.css'
import { Todolist } from "./todo";

//Creates a new instance of the TodoList class
const todoList = new Todolist();

//Get references for the form and input fields in the DOM
const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

//Function that fetches all todos from class and displays them in the list
function renderTodos(): void {
    list.innerHTML = "";
    const todos = todoList.getTodos();

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} (Prio - ${todo.priority})`;
        list.appendChild(li);
    });
}

//Handle form submit when adding new todos 
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    //Get vales from input fields
    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);

    //Try to add new todo using class method, error message if input is invalid
    if (!todoList.addTodo(task, priority)) {
        alert("Felaktig inmatning. Skriv en uppgift och välj prioritet 1 till 3.");
        return;
    }

    //Saves updated list and refresh the display
    todoList.saveToLocalStorage();
    renderTodos();

    ///Resets input fields content after submit 
    taskInput.value = "";
    priorityInput.value = "";
});

//Render todos on page load
renderTodos();