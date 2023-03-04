// SELECT ELEMENTS
const form = document.getElementById("todoform")
const todoInput = document.getElementById("newtodo")
const todosListEl = document.getElementById("todos-list")

// VARS
let todos = [];

// FORM SUBMIT
form.addEventListener('submit', function (event){
    event.preventDefault(); 

    saveTodo();
    renderTodos();
});

function saveTodo(){
    const todoValue = todoInput.value;

    // check if to do is empty
    const isEmpty = todoValue === '';

     // check for duplicate todos
  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());

  if (isEmpty) {
    alert("Todo's input is empty");
  } else if (isDuplicate) {
    alert('Todo already exists!');
  } else {
      todos.push({
        value: todoValue,
        checked: false,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      });
    }

    todoInput.value = '';
  }


// RENDER TODOS
function renderTodos() {
  if (todos.length === 0) {
    todosListEl.innerHTML = '<center>Nothing to do!</center>';
    return;
  }

  // CLEAR ELEMENT BEFORE A RE-RENDER
  todosListEl.innerHTML = '';

  // RENDER TODOS
  todos.forEach((todo, index) => {
    todosListEl.innerHTML += `
    <div class="todo" id=${index}>
      <i 
        class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}"
        style="color : ${todo.color}"
        data-action="check"
      ></i>
      <p class="${todo.checked ? 'checked' : ''}" data-action="check">${todo.value}</p>
      <i class="bi bi-pencil-square" data-action="edit"></i>
      <i class="bi bi-trash" data-action="delete"></i>
    </div>
    `;
  });
}