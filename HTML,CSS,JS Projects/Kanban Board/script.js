let taskData = {}; // local storage
//========================================= Cards Logic Start ============================================================
const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const completed = document.querySelector("#completed");
const tasks = document.querySelectorAll(".tasks");
const tasksNums = document.querySelectorAll(".tasksNums");

let draggedTask = null;
// this for loop will let us know which task is being dragged
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    draggedTask = task;
  });
});
// funtion to imeplement drag and drop
function dragTasksInCards(column) {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    column.classList.add("hovered");
  });
  column.addEventListener("dragleave", (e) => {
    column.classList.remove("hovered");
  });
  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(draggedTask);
    column.classList.remove("hovered");
    count();
    Storage();
  });
}
dragTasksInCards(todo);
dragTasksInCards(progress);
dragTasksInCards(completed);
// new Task Adder Function
function addDragListener(task) {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
  });
}
// add task function that give a structure to the task
function addTask(title, desc, column) {
  const div = document.createElement("div");
  div.classList.add("tasks");
  div.setAttribute("draggable", "true");
  div.innerHTML = `
      <h2>${title}</h2>
      <p>${desc}</p>
      <button>Delete</button>
      `;
  addDragListener(div);
  column.appendChild(div);
  // return div;
}
//========================================= Cards Logic END ============================================================
// ======================================== Count Logic Start ============================================================
function count() {
  [todo, progress, completed].forEach((column) => {
    const task = column.querySelectorAll(".tasks");
    const count = column.querySelector(".tasksNums");
    count.textContent = task.length;
  });
}
// ======================================== Count Logic END ============================================================
// ======================================== Modal Logic Start ============================================================
const addButton = document.querySelector("#add-btn-right");
const modal = document.querySelector(".modal");
const modalBG = document.querySelector(".modal .bg");
const addNewTask = document.querySelector("#add-newTask");
addButton.addEventListener("click", () => {
  modal.classList.toggle("activate");
});
modalBG.addEventListener("click", () => {
  modal.classList.toggle("activate");
});
// add new task by default in TODO Column
addNewTask.addEventListener("click", (e) => {
  const tastTitle = document.querySelector("#task-title").value;
  const tastDesc = document.querySelector("#task-description").value;
  if (tastDesc === "" || tastTitle === "") {
    alert("Please fill in all the required fields.");
    return;
  }

  addTask(tastTitle, tastDesc, todo);
  count();
  Storage();
  modal.classList.toggle("activate");
  document.querySelector("#task-title").value = "";
  document.querySelector("#task-description").value = "";
});

// ======================================== Modal Logic END ============================================================
// ======================================== Local Storage Start ===========================================================
// reload function
if (localStorage.getItem("data") !== null) {
  taskData = JSON.parse(localStorage.getItem("data"));
  [todo, progress, completed].forEach((column) => {
    taskData[column.id].forEach((task) => {
      addTask(task.title, task.desc, column);
    });
  });
  count();
}
function Storage() {
  [todo, progress, completed].forEach((column) => {
    const task = column.querySelectorAll(".tasks");
    taskData[column.id] = Array.from(task).map((task) => {
      return {
        title: task.querySelector("h2").textContent,
        desc: task.querySelector("p").textContent,
      };
    });
    // console.log(taskData);
    localStorage.setItem("data", JSON.stringify(taskData));
  });
}
// ======================================== Local Storage END ===========================================================

// ======================================== Delete Logic Start ===========================================================
function DeleteTask(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
    count();
    Storage();
  }
}

todo.addEventListener("click", DeleteTask);
progress.addEventListener("click", DeleteTask);
completed.addEventListener("click", DeleteTask);
// ======================================== Delete Logic END ===========================================================
