const defaultTodo = [
    {done: true, name: "Coucou"},
    {done: true, name: "Coucou"},
]

const displayTodos = (listTodo) => {
console.log(listTodo)
}


// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new
const btn = document.querySelector('#btnadd')
const input = document.querySelector('#new')
const container = document.querySelector('#container-list')
// #2 Afficher les todos dans le container avec une fonction displayTodos
displayTodos.forEach(listTodo => {

    container.innerHTML += ` <div class="border bg-slate-800 p-8 rounded-xl mt-4">
                           ${listTodo.done}
                           ${listTodo.name}
                            </div>
    `
});

// #3 Ajouter un event listener sur le bouton pour ajouter un todo


// BONUS

// #5 Faire un filtre 

// #6 Suprimer un éléments

// #4 Cocher les checkbox pour marquer un todo comme fait