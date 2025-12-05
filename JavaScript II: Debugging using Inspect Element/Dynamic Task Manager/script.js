let taskInput = document.getElementById("taskInput");
let prioritySelect = document.getElementById("prioritySelect");

let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function() {
    let taskName = taskInput.value;
    let priority = prioritySelect.value;
    
    taskList.innerHTML +=  `<li>${taskName} - ${priority}</li>`;

    
})
