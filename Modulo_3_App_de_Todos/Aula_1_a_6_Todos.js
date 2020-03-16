/*Referenciando os elementos da DOM*/
var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() { //Adiciona todos
    ulElement.innerHTML = ''; /*Quando se adiciona um todos ele repete os mesmos elementos duplicando aqui evito que isso aconteça.*/
    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkTextElement = document.createTextNode('Exlcuir');

        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(linkTextElement);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        ulElement.appendChild(todoElement);
    }
}

function addTodo() {
    var todoTextInput = inputElement.value; //Recupera o valor do input e transforma em um texto
    todos.push(todoTextInput); //Adiciona um novo elemento no final do array
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

btnElement.onclick = addTodo;


function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
renderTodos();