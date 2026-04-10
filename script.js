const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement('li');

    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskValue;
    taskSpan.style.cursor = "pointer";
    taskSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    
    taskInput.value = "";
}


addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});