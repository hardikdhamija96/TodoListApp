// Get the necessary elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add event listener to the 'Add' button
addButton.addEventListener("click", function () {
  // Get the task text from the input field
  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    // Create a new task item with task text and remove button
    const taskItem = document.createElement("li");
    const taskTextSpan = document.createElement("span");
    const removeButton = document.createElement("button");

    // Adding text in span and button
    taskTextSpan.textContent = taskText;
    removeButton.textContent = "-";

    // Append span and button in li
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(removeButton);

    // Add the double-click event listener for editing
    taskTextSpan.addEventListener("dblclick", function () {
      // Create an input field for editing
      const editInput = document.createElement("input");
      const addChangesButton = document.createElement("button");
      editInput.value = taskTextSpan.textContent;
      addChangesButton.textContent = "+";

      taskItem.removeChild(taskTextSpan);
      taskItem.appendChild(editInput)
      taskItem.appendChild(addChangesButton);
      taskItem.removeChild(removeButton);

      addChangesButton.addEventListener("click", () => {
        const updatedText = editInput.value;
        taskTextSpan.textContent = updatedText;
        taskItem.appendChild(taskTextSpan);
        taskItem.removeChild(editInput);
        taskItem.removeChild(addChangesButton);
        taskItem.appendChild(removeButton);
      });

      // Replace the task text with the input field
    //   taskItem.appendChild(editInput);

      // Focus on the input field
      editInput.focus();
    });

    // Add the click event listener to remove the task item
    removeButton.addEventListener("click", function () {
      taskItem.remove();
    });

    // Add the new task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
});

