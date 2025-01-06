const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos";
const TODOS_INCREMENT_KEY = "todos-increment";

const todos = [];

let increment = 0;

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const removeTodo = (event) => {
  const todo = event.target.previousSibling.innerText;
  const li = event.target.parentElement;
  const id = parseInt(li.getAttribute("todo-id"));
  li.remove();
  todos.splice(
    todos.findIndex((todo) => todo.id === id),
    1
  );
  saveTodos();
};

const incrementTodo = () => {
  ++increment;
  localStorage.setItem(TODOS_INCREMENT_KEY, increment);
};

const addTodo = (todo, id, isInit) => {
  let newId = id;
  if (!isInit) {
    newId = increment + 1;
    incrementTodo();
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", removeTodo);

  li.appendChild(span);
  li.appendChild(button);
  li.setAttribute("todo-id", newId);
  todoList.appendChild(li);

  const todoObj = {
    id: newId,
    text: todo,
  };

  todos.push(todoObj);
  if (!isInit) saveTodos();
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  addTodo(todo, 0);
});

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach((todo) => addTodo(todo.text, todo.id, true));
}

const savedTodoIncrement = localStorage.getItem(TODOS_INCREMENT_KEY);
if (savedTodoIncrement) {
  increment = parseInt(savedTodoIncrement);
}
