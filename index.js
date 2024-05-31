const todoList = document.getElementById('todo-list');
const completedList = document.getElementById('completed-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();

  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        listItem.classList.add('completed');
        completedList.appendChild(listItem);
        todoList.removeChild(listItem);
      } else {
        listItem.classList.remove('completed');
        todoList.appendChild(listItem);
        completedList.removeChild(listItem);
      }
    });
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      listItem.remove(); 
    });
    const label = document.createElement('label');
    label.innerText = newTask;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
