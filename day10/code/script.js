document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready ✅");

  const inputTask = document.getElementById("input_task");
  const addBtn = document.getElementById("addBtn");
  const list = document.getElementById("list");
  const controls = document.getElementById("controls"); // Clear All container

  // 🔹 Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // 🔹 Initial render
  renderTasks();

  // 🔹 Add task (button)
  addBtn.addEventListener("click", addTask);

  // 🔹 Add task (Enter key)
  inputTask.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  // 🔹 Add task function
  function addTask() {
    const text = inputTask.value.trim();
    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      isEditing: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    inputTask.value = "";
  }

  // 🔹 Render all tasks
  function renderTasks() {
    list.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");

      if (task.completed) li.classList.add("completed");

      // 👉 EDIT MODE
      if (task.isEditing) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = task.text;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        saveBtn.onclick = () => {
          if (input.value.trim() === "") return;
          task.text = input.value.trim();
          task.isEditing = false;
          saveTasks();
          renderTasks();
        };

        li.appendChild(input);
        li.appendChild(saveBtn);
      }
      // 👉 NORMAL MODE
      else {
        const span = document.createElement("span");
        span.textContent = task.text;
        span.onclick = () => toggleComplete(task.id);

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => enableEdit(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
      }

      list.appendChild(li);
    });

    renderClearAllButton();
  }

  // 🔹 Toggle completed
  function toggleComplete(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
  }

  // 🔹 Delete task
  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }

  // 🔹 Enable edit
  function enableEdit(id) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, isEditing: true } : task
    );
    renderTasks();
  }

  // 🔹 Clear all tasks
  function clearAllTasks() {
    if (!confirm("Are you sure you want to clear all tasks?")) return;
    tasks = [];
    saveTasks();
    renderTasks();
  }

  // 🔹 Clear All button render
  function renderClearAllButton() {
    controls.innerHTML = "";

    if (tasks.length > 0) {
      const clearAllBtn = document.createElement("button");
      clearAllBtn.textContent = "Clear All";
      clearAllBtn.onclick = clearAllTasks;
      controls.appendChild(clearAllBtn);
    }
  }

  // 🔹 Save to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
