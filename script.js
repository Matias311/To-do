const input = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");
const ul = document.querySelector("[data-card]");

let array = [];
import trashCan from "./components/trash.js";

/* Al cargar revisa el localstorage y si hay algo guardado lo crea */
function reLoad() {
  document.addEventListener("DOMContentLoaded", () => {
    array = JSON.parse(localStorage.getItem("task")) || [];
    crearHTML();
  });
}
reLoad();

/* Guarda en el local cada vez que se llame */
function local() {
  localStorage.setItem("task", JSON.stringify(array));
}

/* Toma los datos del valor del input y los guarda y copia en un array */
function task() {
  let task = input.value;
  /* Lo que hace es prevenir que se pueda crear una tarea vacia */
  if (task === "") {
    return;
  }
  let data = {
    task: task,
    id: new Date().getTime(),
    done: false,
  };
  array = [...array, data];
}

/* Crea el HTML */
function crearHTML() {
  clearHTML();
  if (array.length > 0) {
    /* Crea una tarea si el array es mayor a 0 */
    array.forEach((task) => {
      const li = document.createElement("li");
      li.setAttribute("id", task.id);
      li.classList.add("card__todo");
      const icon = document.createElement("i");
      icon.classList.add("fa-regular", "fa-square-check", "check");
      const title = document.createElement("h1");
      title.innerHTML = task.task;
      const contenido = ``;
      li.innerHTML = contenido;
      ul.appendChild(li);
      li.appendChild(icon);
      li.appendChild(title);
      li.appendChild(trashCan());

      /* Detecta si se le da click al checkbox y le agrega o quita la clase correspondiente */
      icon.addEventListener("click", (e) => {
        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");
      });

      /* si se le da click al icono lo que hace es que compara los id y si son iguales cambiara el task.done a true lo cual significa que esta hecha esa tarea en especifico y si esta en true y se le vuelve a dar pasara a false que significa que aun no esta lista */
      icon.addEventListener("click", (e) => {
        if (icon.parentElement.id == task.id) {
          if (task.done == true) {
            task.done = false;
            local();
          } else if (task.done == false) {
            task.done = true;
            local();
          }
        }
      });

      /* Ve si task.done es true le agregara la clase correspondiente */
      if (task.done == true) {
        icon.classList.add("fa-solid");
      } else if (task.done == false) {
        icon.classList.add("fa-regular");
      }
    });
  }
}

/* Limpia el HTML asi no tenemos tareas repetidas cada vez que creamos una de estas */
function clearHTML() {
  ul.innerHTML = "";
}

/* Lo que hace esto es que cada vez que le damos click al boton de crear tarea es llamar a html, local y limpia el input */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  task();
  input.value = "";
  crearHTML();
  local();
});

/* Remover task */
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
