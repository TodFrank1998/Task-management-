// Get the form and task list elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Listen for the form submit
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskName = document.getElementById('task-name').value;
  const taskDeadline = document.getElementById('task-deadline').value;
  const taskAssignee = document.getElementById('task-assignee').value;

  if (taskName && taskDeadline && taskAssignee) {
    addTask(taskName, taskDeadline, taskAssignee);
    taskForm.reset();
  }
});

// Function to add a task
function addTask(name, deadline, assignee) {
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>Task:</strong> ${name} <br>
    <strong>Deadline:</strong> ${deadline} <br>
    <strong>Assigned to:</strong> ${assignee}
  `;
  taskList.appendChild(li);
}
