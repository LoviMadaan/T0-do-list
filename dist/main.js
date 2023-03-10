/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// SELECT ELEMENTS\r\nconst form = document.getElementById('todoform');\r\nconst todoInput = document.getElementById('newtodo');\r\nconst todosListEl = document.getElementById('todos-list');\r\nconst notificationEl = document.querySelector('.notification');\r\n\r\n// VARS\r\nlet todos = JSON.parse(localStorage.getItem('todos')) || [];\r\nlet EditTodoId = -1;\r\n\r\n// 1st render\r\nrenderTodos();\r\n\r\n// FORM SUBMIT\r\nform.addEventListener('submit', function (event) {\r\n  event.preventDefault();\r\n\r\n  saveTodo();\r\n  renderTodos();\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n});\r\n\r\n// SAVE TODO\r\nfunction saveTodo() {\r\n  const todoValue = todoInput.value;\r\n\r\n  // check if the todo is empty\r\n  const isEmpty = todoValue === '';\r\n\r\n  // check for duplicate todos\r\n  const isDuplicate = todos.some((todo) => todo.value.toUpperCase() === todoValue.toUpperCase());\r\n\r\n  if (isEmpty) {\r\n    showNotification(\"Todo's input is empty\");\r\n  } else if (isDuplicate) {\r\n    showNotification('Todo already exists!');\r\n  } else {\r\n    if (EditTodoId >= 0) {\r\n      todos = todos.map((todo, index) => ({\r\n        ...todo,\r\n        value: index === EditTodoId ? todoValue : todo.value,\r\n      }));\r\n      EditTodoId = -1;\r\n    } else {\r\n      todos.push({\r\n        value: todoValue,\r\n        checked: false,\r\n        color: '#' + Math.floor(Math.random() * 16777215).toString(16),\r\n      });\r\n    }\r\n\r\n    todoInput.value = '';\r\n  }\r\n}\r\n\r\n// RENDER TODOS\r\nfunction renderTodos() {\r\n  if (todos.length === 0) {\r\n    todosListEl.innerHTML = '<center>Nothing to do!</center>';\r\n    return;\r\n  }\r\n\r\n  // CLEAR ELEMENT BEFORE A RE-RENDER\r\n  todosListEl.innerHTML = '';\r\n\r\n  // RENDER TODOS\r\n  todos.forEach((todo, index) => {\r\n    todosListEl.innerHTML += `\r\n    <div class=\"todo\" id=${index}>\r\n      <i \r\n        class=\"bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle'}\"\r\n        style=\"color : ${todo.color}\"\r\n        data-action=\"check\"\r\n      ></i>\r\n      <p class=\"${todo.checked ? 'checked' : ''}\" data-action=\"check\">${todo.value}</p>\r\n      <i class=\"bi bi-pencil-square\" data-action=\"edit\"></i>\r\n      <i class=\"bi bi-trash\" data-action=\"delete\"></i>\r\n    </div>\r\n    `;\r\n  });\r\n}\r\n\r\n// CLICK EVENT LISTENER FOR ALL THE TODOS\r\ntodosListEl.addEventListener('click', (event) => {\r\n  const target = event.target;\r\n  const parentElement = target.parentNode;\r\n\r\n  if (parentElement.className !== 'todo') return;\r\n\r\n  // t o d o id\r\n  const todo = parentElement;\r\n  const todoId = Number(todo.id);\r\n\r\n  // target action\r\n  const action = target.dataset.action;\r\n\r\n  action === 'check' && checkTodo(todoId);\r\n  action === 'edit' && editTodo(todoId);\r\n  action === 'delete' && deleteTodo(todoId);\r\n});\r\n\r\n// CHECK A TODO\r\nfunction checkTodo(todoId) {\r\n  todos = todos.map((todo, index) => ({\r\n    ...todo,\r\n    checked: index === todoId ? !todo.checked : todo.checked,\r\n  }));\r\n\r\n  renderTodos();\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n}\r\n\r\n// EDIT A TODO\r\nfunction editTodo(todoId) {\r\n  todoInput.value = todos[todoId].value;\r\n  EditTodoId = todoId;\r\n}\r\n\r\n// DELETE TODO\r\nfunction deleteTodo(todoId) {\r\n  todos = todos.filter((todo, index) => index !== todoId);\r\n  EditTodoId = -1;\r\n\r\n  // re-render\r\n  renderTodos();\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n}\r\n\r\n// SHOW A NOTIFICATION\r\nfunction showNotification(msg) {\r\n  // change the message\r\n  notificationEl.innerHTML = msg;\r\n\r\n  // notification enter\r\n  notificationEl.classList.add('notif-enter');\r\n\r\n  // notification leave\r\n  setTimeout(() => {\r\n    notificationEl.classList.remove('notif-enter');\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);