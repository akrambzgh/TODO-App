// Elements
let myInput = document.querySelector(".task-input");
let addTaskButton = document.querySelector(".add-btn")
let tasksList = document.querySelector(".tasks-list");
let main = document.querySelector(".tasks");

// Delete All Button
const deleteAll = document.createElement("button");
const deleteDetailsDiv = document.createElement("div");
deleteDetailsDiv.classList.add("details-delete-all");

// Add Classes
deleteAll.classList.add("delete-all");
// Edit Text Content
deleteAll.textContent = "Clear Complete";
// Event Listeners
addTaskButton.addEventListener("click", addTask);

// Functions
function addTask() {
    if (myInput.value.length !== 0) {
        // Create Elemnt
        const taskDiv = document.createElement("div");
        const completeButton = document.createElement("button");
        const taskText = document.createElement("li");
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
        };

        // Complete Button
        completeButton.addEventListener("click", CheckButton);

        function CheckButton() {
            completeButton.innerHTML = `<img src="/images/icon-check.svg" alt="">`
            completeButton.classList.toggle("checked");
            taskText.classList.toggle("completed");
        };

        // Delelte All Button
        deleteDetailsDiv.appendChild(deleteAll);
        main.appendChild(deleteDetailsDiv);

        deleteAll.addEventListener("click", deleteAllTasks);

        function deleteAllTasks() {
            if (completeButton.classList[1] === "checked") {
                completeButton.parentElement.remove();
            };
        };

        // Empty the myInput
        myInput.value = "";

        // Append items to the taskDiv
        taskDiv.appendChild(completeButton);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(deleteButton);

        // Append taskDiv to the taskList
        tasksList.prepend(taskDiv);
    } else {
        alert("There Are No Tasks");
    };
};