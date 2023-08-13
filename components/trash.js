const trashCan = () => {

    const trash = document.createElement('i')
    trash.classList.add('fa-regular', 'fa-trash-can', 'trash')
    trash.addEventListener('click', deleteTask)
    return trash
    
}

const deleteTask = (evento) => {

    const parent = evento.target.parentElement
    parent.remove()

}

export default trashCan;