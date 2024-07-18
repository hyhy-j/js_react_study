const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
  // form 입력된 todo를 todo-list에 올리는 함수
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✅";
  button.addEventListener("click", deleteToDo); // 체크 버튼을 만들어 클릭되었을 경우 이벤트로 deleteToDo 함수 실행
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // form이 제출되었을 때 실행되는 함수
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

function deleteToDo(event) {
  // 체크 버튼을 눌렀을 때 해당 투두가 지워지도록 하는 함수
  const li = event.target.parentElement;
  li.remove();
}

toDoForm.addEventListener("submit", handleToDoSubmit); // 제출 시 handleToDoSubmit 실행
