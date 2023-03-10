const form = document.getElementById("todoform");
const todoInput = document.getElementById("newtodo");
const todosListEl = document.getElementById("todos-list");

renderTodos();

todos.forEach((todo, index) => {
    todosListEl.innerHTML +=`
    <div class="todo" id=${index}>
      <i 
        class="bi ${todo.checked ? "bi-check-circle-fill" : "bi-circle"}"
        style="color : ${todo.color}"
        data-action="check"
      ></i>
      <p class="${todo.checked ? "checked" : ""}" data-action="check">${todo.value}</p>
      <i class="bi bi-pencil-square" data-action="edit"></i>
      <i class="bi bi-trash" data-action="delete"></i>
    </div>
    `;
  });


// CLICK EVENT LISTENER FOR ALL THE TODOS
todosListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;

  if (parentElement.className !== "todo") return;

  // t o d o id
  const todo = parentElement;
  const todoId = Number(todo.id);

  // target action
  const action = target.dataset.action;

  action === "check" && checkTodo(todoId);
  action === "edit" && editTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});

// DELETE TODO
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);
  EditTodoId = -1;

  // re-render
  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
}