const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const todosContainer = document.querySelector(".todos-container");

addBtn.addEventListener("click", handleAddTodo);
function handleAddTodo(e) {
  e.preventDefault();
  if (input.value.length < 4) {
    alert("Sentence Should Be Long ");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completeBtn.classList.add("completeBtn");
    todoDiv.appendChild(completeBtn);
    const list = document.createElement("li");
    list.innerHTML = input.value;
    todoDiv.appendChild(list);
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("deleteBtn");
    todoDiv.appendChild(deleteBtn);
    todosContainer.appendChild(todoDiv);
    input.value = "";
  }
}
todosContainer.addEventListener("click", handleTodos);
function handleTodos(e) {
  const item = e.target;
  if (item.classList[0] === "deleteBtn") {
    item.parentElement.remove();
  } else if (item.classList[0] === "completeBtn") {
    item.parentElement.classList.toggle("complete");
  }
}
