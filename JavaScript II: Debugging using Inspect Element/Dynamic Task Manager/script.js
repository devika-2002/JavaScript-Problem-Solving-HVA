const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const filterSelect = document.getElementById("filterSelect");
const sortBtn = document.getElementById("sortBtn");
const taskList = document.getElementById("taskList");

let tasks = [];
let sortAscending = true;

const order = {
    High: 3,
    Medium: 2,
    Low: 1
};

addTaskBtn.addEventListener("click", function () {
    const taskName = taskInput.value;
    const priority = prioritySelect.value;

    const task = {
    name: taskName,
    priority: priority,
    status: "Pending"
    };

    tasks.push(task);
    taskInput.value = "";
    displayTasks();
});

taskList.addEventListener("click", function (event) {
    const action = event.target.dataset.action;
    const index = event.target.dataset.index;

    if (action === "toggle") {
    if (tasks[index].status === "Pending") {
        tasks[index].status = "Completed";
    } else {
        tasks[index].status = "Pending";
    }
    }

    if (action === "delete") {
        tasks.splice(index, 1);
    }

    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";
    const filterValue = filterSelect.value;

    for (let i = 0; i < tasks.length; i++) {

    if (filterValue === "All" || tasks[i].status === filterValue) {
        taskList.innerHTML += `
            <li>
                ${tasks[i].name} | ${tasks[i].priority} | ${tasks[i].status}
                <button data-action="toggle" data-index="${i}">Toggle</button>
                <button data-action="delete" data-index="${i}">Delete</button>
            </li>`;
       }
    }
}

filterSelect.addEventListener("change", function () {
    displayTasks();
});

sortBtn.addEventListener("click", function () {
    tasks.sort(function (a, b) {
    if (sortAscending) {
        return order[a.priority] - order[b.priority];
    } else {
        return order[b.priority] - order[a.priority];
    }
    });

    sortAscending = !sortAscending;
    displayTasks();
});

