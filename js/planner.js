const plannerForm = document.querySelector("#planner-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");
const storageKey = "kaleemullah-student-planner";
let tasks = JSON.parse(localStorage.getItem(storageKey) || "[]");

function renderTasks() {
  taskList.replaceChildren();
  emptyMessage.classList.toggle("d-none", tasks.length > 0);

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center gap-3";
    const label = document.createElement("span");
    label.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-sm btn-outline-secondary";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove " + task);
    removeButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
    });

    item.append(label, removeButton);
    taskList.append(item);
  });
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
  renderTasks();
}

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTask = taskInput.value.trim();
  if (!newTask) return;
  tasks.push(newTask);
  taskInput.value = "";
  saveTasks();
  taskInput.focus();
});

renderTasks();

