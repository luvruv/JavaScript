/*
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
tasks.forEach(task => renderTasks(task));
addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = ""; // clear input
    console.log(tasks); 
});
function renderTasks(task) {
    // console.log(task.text);
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    if (task.completed) li.classList.add('completed');
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') return;
        task.completed = !task.completed;
        li.classList.toggle('completed');
        saveTasks();
    })
    todoList.appendChild(li);
    }
// local array storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
}) 
*/
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render saved tasks on load
    tasks.forEach(task => renderTask(task));

    // Add task button click
    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        tasks.push(newTask);
        saveTasks();
        renderTask(newTask); // render the new task
        todoInput.value = ""; // clear input
    });

    // Function to render a single task
    function renderTask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Toggle task completion
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation() // prevent toggle from firing
            task = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        })
        // Handle delete
        li.querySelector('.delete-btn').addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        });

        todoList.appendChild(li);
    }

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
