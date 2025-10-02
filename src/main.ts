import './style.css'
import { Todolist } from "./todo";

//Creates a new instance of the TodoList class
const todoList = new Todolist();

//Get references for the form and input fields in the DOM
const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;
