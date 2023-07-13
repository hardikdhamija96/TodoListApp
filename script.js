//Get necessary Elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Adding event listener to "Add" button

addButton.addEventListener("click",function(){
    // Get task text from input field
    const taskText = taskInput.value;

    // Debugging if taskText is working
    console.log(taskText);

    if(taskText.trim() !==""){
        // Create a new task item which will be added to task List
        const taskItem = document.createElement("Li");
        taskItem.textContent = taskText;

        // Adding this task item to task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = ""; 
    }
});


// Add event listener to task list using event delegation

taskList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
});
