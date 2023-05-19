const defaultTodo = [
    {done: true, name: "Tache A"},
    {done: true, name: "Tache B"},
]

// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new
const btn = document.querySelector('#add')
const container = document.querySelector('#container-list')
const input = document.querySelector('#new')
// #2 Afficher les todos dans le container avec une fonction displayTodos
const displayTodos = (list) => {

    container.innerHTML =""
    list.forEach(task => {

        container.innerHTML += `<div class="mt-2 p-2 bg-slate-700 mx-auto">${task.name}</div>`
        
    });

}
displayTodos(defaultTodo)

// #3 Ajouter un event listener sur le bouton pour ajouter un todo

btn.addEventListener('click',() => {

    const newTask = {name:input.value}
    input.value = ""
    defaultTodo.push   (newTask)
    displayTodos(defaultTodo)

})

// BONUS

// #5 Faire un filtre 

// #6 Suprimer un éléments

// #4 Cocher les checkbox pour marquer un todo comme fait