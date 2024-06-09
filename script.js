document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const taskValue = taskInput.value.trim();
    const dateValue = dateInput.value;
    const timeValue = timeInput.value;

    if (taskValue) {
        const taskList = document.getElementById('task-list');

        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskText = document.createElement('span');
        taskText.textContent = `${taskValue} - ${dateValue} ${timeValue}`;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editTask(taskItem, taskValue, dateValue, timeValue);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }
});

function editTask(taskItem, oldTask, oldDate, oldTime) {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    taskInput.value = oldTask;
    dateInput.value = oldDate;
    timeInput.value = oldTime;

    taskItem.remove();
}
