showTasks();

let new_task_submit = document.getElementById("new-task-submit");
new_task_submit.addEventListener("click", function (e) {
  let new_task_input = document.getElementById("new-task-input");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(tasks);
  }
  taskObj.push(new_task_input.value);
  localStorage.setItem("tasks", JSON.stringify(taskObj));
  new_task_input.value = "";
  console.log(taskObj);
  showTasks();
});

function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(tasks);
  }
  let html = "";
  taskObj.forEach(function (element, index) {
    html += `
        <div class="content">
            <p class="task">${element}</p>
        </div>
        <div class="actions">
            <button id="${index}" onclick="deleteNode(${index})" class="delete" >Delete</button>
        </div>
        `;
  });
  let taskEle = document.getElementById("tasks");
  if (taskObj != 0) {
    taskEle.innerHTML = html;
  } else {
    taskEle.innerHTML = `Nothing to show! Use "Add a Task" section above to add tasks.`;
  }
}

function deleteNode(index) {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(tasks);
  }

  taskObj.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(taskObj));
  showTasks();
}
