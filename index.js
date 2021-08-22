// Declare variables
let addTaskBtn = document.getElementById("add_task");
let addTaskInput = document.getElementById("add_task_input");
let incompleteTask = document.getElementById("incomplete_task");
let runningTask = document.getElementById("running_task");
let completeTask = document.getElementById("complete_task");

addTaskBtn.addEventListener("click", function(){
    let createLi = document.createElement("li");
    let createSpan = document.createElement("span");
    let createButton = document.createElement("button");
    createSpan.innerText = addTaskInput.value;
    createButton.classList.add("running");
    createButton.innerText = "Running";

    // append child
    incompleteTask.appendChild(createLi);
    createLi.appendChild(createSpan);
    createLi.appendChild(createButton);

    // clear input
    addTaskInput.value = "";
});