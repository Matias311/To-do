const checkbox = () => {

    const icon = document.createElement('i');    
    icon.addEventListener('click', completeTask)
    icon.classList.add('fa-regular', 'fa-square-check', 'check')
    return icon 
    
}

const completeTask = (evento) => {

    const elemento = evento.target
    elemento.classList.toggle('fa-solid')
    elemento.classList.toggle('fa-regular')

}

export default checkbox;