let todoInput = document.querySelector("#todoInput");
let pageToDoContainer = document.querySelector("#pageToDoContainer");
let createToDoList = document.createElement("div");
createToDoList.classList.add("create__todo__list");
pageToDoContainer.appendChild(createToDoList);

function createButton() {
  if (todoInput.value === "") {
    alert("Insert something!");
    return;
  }

  let containerDiv = document.createElement("div");
  containerDiv.classList.add("todo-item");

  let svgSpan = document.createElement("span");
  svgSpan.innerHTML = `
          <svg class="svg__circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
          </svg>
      `;
  containerDiv.appendChild(svgSpan);

  let textElement = document.createElement("p");
  textElement.textContent = todoInput.value;
  containerDiv.appendChild(textElement);

  createToDoList.appendChild(containerDiv);

  // Adăugăm border sus și jos doar dacă sunt mai multe elemente în listă
  let todoItems = document.querySelectorAll(".todo-item");
  if(todoItems.length ==1) {
    containerDiv.style.borderTop = "1px solid #2a2c41";
    containerDiv.style.borderBottom = "1px solid #2a2c41";
  }
  if (todoItems.length > 1) {
    containerDiv.style.borderTop = "1px solid #2a2c41";
    containerDiv.style.borderBottom = "1px solid #2a2c41";
  }
}
