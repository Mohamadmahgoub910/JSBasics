// Selectors
let d = document;
const todoInput = d.querySelector(".todo-input");
const todoButton = d.querySelector(".todo-button");
const todoList = d.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", function (event) {
  event.preventDefault();
  const todoDiv = d.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = d.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // crete check button
  const completedButton = d.createElement("button");
  completedButton.innerHTML =
    '<i style="color:green ;" class="fa fa-check" aria-hidden="true"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // crete trash button
  const trashButton = d.createElement("button");
  trashButton.innerHTML =
    '<i style="color:red ;" class="fa fa-trash" aria-hidden="true"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //   Append to List
  todoList.appendChild(todoDiv);
  todoInput.value = "";
  // Delete task
  todoList.addEventListener("click", function (event) {
    const item = event.target;
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.remove();
    }
  });
});

// Functions
