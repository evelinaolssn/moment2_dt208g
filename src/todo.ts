import type { Todo } from './interface';

//Class that manages list of Todo items
export class Todolist {
    //Array that stores to do items
    private todos: Todo[] = [];

    //Constructor that loads todos from localStorage when initialized
    constructor() {
        this.loadFromLocalStorage();
    }

    //Returns list of todos
    getTodos(): Todo[] {
        return this.todos;
    }

    //Adds a new todo and returns true if input is valid and was added succesfully
    addTodo(task: string, priority: number): boolean {
        if (!task.trim()) {
            return false;
        }

        if (priority < 1 || priority > 3) {
            return false;
        }

        this.todos.push({ task, priority, completed: false })
        return true;
    }

    //Marks a todo as done using index in the array
    markTodoCompleted(todoIndex: number): void {
        if (todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos[todoIndex].completed = true;
        }
    }

    //Saves todo array to localStorage
    saveToLocalStorage(): void {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    //Loads todo array from localStorage
    loadFromLocalStorage(): void {
        const data = localStorage.getItem("todos");
        if (data) {
            this.todos = JSON.parse(data)
        } else {
            this.todos = [];
        }
    }
}

