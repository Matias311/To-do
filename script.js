const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");
const ul = document.querySelector("[data-card]");

let array = [];
import checkbox from "./components/check.js";
import trashCan from "./components/trash.js";

function reLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    array = JSON.parse(localStorage.getItem("task")) || [];
    crearHTML();
  });
}
reLoad();

function task() {
  let task = input.value;
  let data = {
    task: task,
    id: new Date().getTime(),
  };
  array = [...array, data];
}

function crearHTML() {
  clearHTML();
  if (array.length > 0) {
    array.forEach((task) => {
      const li = document.createElement("li");
      li.setAttribute("id", task.id);
      li.classList.add("card__todo");
      const title = document.createElement("h1");
      title.innerHTML = task.task;
      const contenido = ``;
      li.innerHTML = contenido;
      ul.appendChild(li);
      li.appendChild(checkbox());
      li.appendChild(title);
      li.appendChild(trashCan());
    });
  }
}

function clearHTML() {
  ul.innerHTML = "";
}

function local() {
  localStorage.setItem("task", JSON.stringify(array));
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  task();
  input.value = "";
  crearHTML();
  local();
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    const taskId = e.target.closest("li").id;
    removeTask(taskId);
  }
});

function removeTask(taskId) {
  array = array.filter((task) => task.id !== parseInt(taskId));
  local();
  document.getElementById(taskId).remove();
}
