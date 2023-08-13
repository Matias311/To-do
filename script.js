import checkbox from './components/check.js';
import trashCan from './components/trash.js';

const texto = document.querySelector('[data-input]');
const btn = document.querySelector('[data-btn]');



const crearTarea = (evento) => {

    evento.preventDefault();
    const value = texto.value;
    const list = document.querySelector('[data-card]');
    const task = document.createElement('li');
    task.classList.add('card__todo');
    const titletask = document.createElement('h1')
    titletask.innerText = value
    texto.value = ' ';
    const contenido = `
          
    `
    task.innerHTML = contenido;
    list.appendChild(task);
    task.appendChild(checkbox())
    task.appendChild(titletask)
    task.appendChild(trashCan())

}

btn.addEventListener('click', crearTarea);
