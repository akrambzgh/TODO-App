// Elements
let myInput = document.querySelector(".task-input");
let addTaskButton = document.querySelector(".add-btn")
let tasksList = document.querySelector(".tasks-list");

// Event Listeners
addTaskButton.addEventListener("click", addTask);

// Functions
function addTask() {
    // Create Elemnt
    const taskDiv = document.createElement("div");
    const completeButton = document.createElement("button");
    const taskText = document.createElement("li")
    const deleteButton = document.createElement("button");

    // Add Classes
    taskDiv.classList.add("task");
    completeButton.classList.add("complete");
    taskText.classList.add("task-text");
    deleteButton.classList.add("delete");

    // Edit taskText Content
    taskText.textContent = myInput.value;

    // Edit deleteButton Content
    deleteButton.innerHTML = `<img src="/images/icon-cross.svg" alt="">`;

    // Delete Button
    deleteButton.addEventListener("click", deleteTask);

    function deleteTask() {
        taskDiv.remove();
    }

    // Complete Button
    completeButton.addEventListener("click", CheckButton);

    function CheckButton() {
        completeButton.innerHTML = `<img src="/images/icon-check.svg" alt="">`
        completeButton.classList.toggle("checked");
        taskText.classList.toggle("completed");
    }

    // Empty the myInput
    myInput.value = "";
    // Append items to the taskDiv
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteButton);

    // Append taskDiv to the taskList
    tasksList.appendChild(taskDiv);
}