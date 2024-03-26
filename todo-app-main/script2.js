// let input = document.querySelector("#newTodoInput");
// let sortableContainer = document.querySelector("#pageTodoContainer");
// let statesGroup = document.querySelector("#statesGroup");
// function createToDoList() {
//   let rowItem = document.createElement("div");
//   let dotItem = document.createElement("button");
//   let item = document.createElement("span");
//   let deleteItem = document.createElement("button");

//   rowItem.classList.add("todo__group");
//   dotItem.classList.add("dot");
//   item.classList.add("todo__item");
//   deleteItem.classList.add("todo__delete");
//   statesGroup.classList.add("states__group");

//   // make the items draggable
//   rowItem.setAttribute("draggable", "true");
//   // add drag and drop
//   rowItem.addEventListener("dragstart", () => {
//     rowItem.classList.add("dragging");
//   });

//   // remove dragging
//   rowItem.addEventListener("dragend", () => {
//     rowItem.classList.remove("dragging");
//   });

//   item.innerText = input.value;
//   item.setAttribute("state", "incomplete");
//   deleteItem.innerText = "X";
//   dotItem.addEventListener("click", (e) => handleTaskClick(e));
//   deleteItem.addEventListener("click", (e) =>
//     deleteRowItem(e, sortableContainer)
//   );
//   rowItem.appendChild(dotItem);
//   rowItem.appendChild(item);
//   rowItem.appendChild(deleteItem);
//   sortableContainer.appendChild(rowItem);

//   dragAndDrop();
//   displayLeftItems();
//   if (document.getElementById("allItems") == null) {
//     displayAllItems();
//   }
//   if (document.getElementById("activeItems") == null) {
//     displayActiveItems();
//   }
//   if (document.getElementById("completeItems") == null) {
//     displayCompleteItems();
//   }
//   if (document.getElementById("cleartems") == null) {
//     clearCompletedItems();
//   }
// }

// const statesButtonContainer = document.getElementById("statesButtonsContainer");
// const clearButtonContainer = document.getElementById("clearButtonContainer");

// // functia de bifare
// handleTaskClick();
// function handleTaskClick(e) {
//   const item = e.target.parentNode.getElementById("span")[0];
//   const dot = e.target.parentNode.getElementById("button")[0];
//   if (!item.style.textDecoration) {
//     item.style.textDecoration = "line-through";
//     item.setAttribute("state", "complete");
//     displayLeftItems();
//     dot.classList.remove("dot");
//     dot.classList.add("complete__dot");
//     dot.innerText = "✓";
//   } else {
//     item.style.textDecoration = "";
//     item.setAttribute("state", "incomplete");
//     displayLeftItems();
//     dot.classList.remove("complete__dot");
//     dot.classList.add("dot");
//     dot.innerText = "";
//   }
// }

// function dragAndDrop() {
//   const initSortableContainer = (e) => {
//     e.preventDefault();
//     const draggingItem = sortableContainer.querySelector(".dragging");

//     // getting all items except the one currently dragging

//     const siblings = [
//       ...sortableContainer.querySelectorAll(".todoGroup:not(.dragging)"),
//     ];
//     // finding the siblings after which the dragging itm should be placed
//     let nextSibling = siblings.find((sibling) => {
//       return e.clientY <= sibling.offsetTop + sibling.offsetaHeight / 2;
//     });
//     // insert the dragging item before the found sibling
//     sortableContainer.insertBefore(draggingItem, nextSibling);
//   };
//   sortableContainer.addEventListener("dragover", initSortableContainer);
// }

// function deleteRowItem(e, todoContainer) {
//   let itemRow = e.target.parentElement;
//   todoContainer.removeChild(itemRow);
//   displayLeftItems();
// }

// function displayLeftItems() {
//   const leftItemsContainer = document.querySelector("#leftItemsContainer");
//   let count = 0;
//   leftItemsContainer.classList.add("states__group");
//   const items = document.querySelectorAll(".todo__item");

//   let leftItems = document.createElement("span");
//   for (let el of items) {
//     if (el.getAttribute("state") == "incomplete") {
//       count++;
//       leftItems.innerText = " ";
//     }
//   }

//   leftItems.innerText = `${count} items left`;
//   leftItemsContainer.innerHTML = leftItems.innerHTML;
// }

// function displayAllItems() {
//   let allItemsBtn = document.createElement("button");
//   allItemsBtn.textContent = "All";
//   allItemsBtn.classList.add("states__button");
//   allItemsBtn.id = "allItems";
//   allItemsBtn.addEventListener("click", () => {
//     const items = document.querySelectorAll(".todo__item");
//     for (let el of items) {
//       if (
//         el.getAttribute("state") == "complete" ||
//         el.getAttribute("state") == "incomplete"
//       ) {
//         el.parentNode.style.display = "grid";
//       }
//     }
//   });
//   statesButtonContainer.appendChild(allItemsBtn);
// }

// function displayActiveItems() {
//   let activeItems = document.createElement("button");
//   activeItems.textContent = "Active";
//   activeItems.classList.add("states__button");
//   activeItems.id = "activeItems";

//   activeItems.addEventListener("click", () => {
//     const items = document.querySelectorAll(".todo__item");
//     for (let el of items) {
//       if (el.getAttribute("state") == "complete") {
//         el.parentNode.style.display = "none";
//       }
//     }
//   });
//   statesButtonContainer.appendChild(activeItems);
// }

// function displayCompleteItems() {
//   let completeItems = document.createElement("button");
//   completeItems.textContent = "Completed";
//   completeItems.classList.add("states__button");
//   completeItems.id = "completedItems";

//   completeItems.addEventListener("click", () => {
//     const items = document.querySelectorAll(".todo__item");
//     for (let el of items) {
//       if (el.getAttribute("state") == "incomplete") {
//         el.parentNode.style.display = "none";
//       }
//     }
//   });
//   statesButtonContainer.appendChild(completeItems);
// }

// function clearCompletedItems() {
//   let clearItems = document.createElement("button");
//   clearItems.textContent = "Clear Completed";
//   clearItems.classList.add("states__button");
//   clearItems.id = "clearCompletedItems";

//   clearItems.addEventListener("click", () => {
//     const items = document.querySelectorAll(".todo__item");
//     for (let el of items) {
//       if (el.getAttribute("state") == "complete") {
//         el.parentNode.removeChild(el.parentNode);
//       }
//     }
//   });
//   clearButtonContainer.appendChild(clearItems);
// }
// swapStyleSheet();
// // toggle light and dark mode
// function swapStyleSheet(sheet) {
//   console.log("Gdfss");
//   let pageStyle = document.getElementById("pageStyle");
//   pageStyle.setAttribute("href", sheet);
//   console.log("Gdfss");
// }

// function toggleMode() {
//   let objDate = new Date();
//   let currentTime = objDate.getHours();
//   if (currentTime > 18 || currentTime < 6) {
//     swapStyleSheet("light.css");
//   } else {
//     swapStyleSheet("dark.css");
//   }
// }

// toggleMode();

let inputContainer = document.querySelector("#newTodoInput");
let newItemsContainer = document.querySelector("#pageTodoContainer");
let statesGroup = document.querySelector("#statesGroup");

newItemsContainer.appendChild(todoItems);
// Modifică funcția createToDoListButton() pentru a include această funcționalitate

function createToDoListButton() {
  if (inputContainer.value === "") {
    alert("Insert something!");
    return;
  }

  // Creăm un container pentru fiecare element din lista de todo-uri
  let todoItemContainer = document.createElement("div");

  todoItemContainer.classList.add("todo__group", "draggable");
  todoItemContainer.draggable = true; // Setăm atributul draggable

  // Atașăm evenimentul dragstart
  todoItemContainer.addEventListener("dragstart", dragStart);

  let dotAndText = document.createElement("div");
  dotAndText.classList.add("dot__and__input");
  todoItemContainer.appendChild(dotAndText);

  // Creăm elementul pentru dot
  let dotItem = document.createElement("div");
  dotItem.classList.add("dot");
  dotAndText.appendChild(dotItem); // Adăugăm dot-ul în container

  // Creăm un nou element <p> pentru a stoca textul introdus de utilizator
  let newItemText = document.createElement("p");
  newItemText.classList.add("new___item__text");
  newItemText.textContent = inputContainer.value;

  // Adăugăm noul element <p> în containerul pentru fiecare element din lista de todo-uri
  dotAndText.appendChild(newItemText);

  // Adăugăm containerul în div-ul cu id-ul "pageTodoContainer"
  newItemsContainer.appendChild(todoItemContainer);

  let removeItem = document.createElement("span");
  removeItem.textContent = "X";
  removeItem.classList.add("remove__item");
  todoItemContainer.appendChild(removeItem);

  // Resetăm câmpul de input după ce am adăugat textul în todoItems
  inputContainer.value = "";

  if (newItemsContainer.children.length >= 1) {
    statesGroup.style.display = "flex";
  }

  // Adăugăm eveniment de ascultare pentru fiecare buton "X" pentru eliminarea elementului
  const removeButtons = document.querySelectorAll(".remove__item");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeToDoItem);
  });

  updateItemsLeft();
}


function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}
function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  const dropzone = e.target.closest(".page__todo__container"); // Găsim cel mai apropiat container
  if (!dropzone) return; // Dacă nu există container, nu facem nimic

  // Determinăm poziția cursorului în containerul țintă
  const mouseY = e.clientY;
  const dropzoneRect = dropzone.getBoundingClientRect();
  const relativeY = mouseY - dropzoneRect.top;

  // Calculăm indexul de inserare în funcție de poziția cursorului
  let insertionIndex;
  const children = dropzone.children;
  for (let i = 0; i < children.length; i++) {
    const childRect = children[i].getBoundingClientRect();
    if (mouseY < childRect.top + childRect.height / 2) {
      insertionIndex = i;
      break;
    }
  }
  if (insertionIndex === undefined) {
    insertionIndex = children.length;
  }

  // Plasăm elementul mutat în containerul potrivit la poziția calculată
  dropzone.insertBefore(draggedElement, children[insertionIndex]);
}

function removeToDoItem(event) {
  const todoItemContainer = event.target.closest(".todo__group");
  todoItemContainer.remove();

  // Actualizăm numărul de elemente rămase
  updateItemsLeft();
  if (
    document.querySelectorAll(".page__todo__container .todo__group").length ===
    0
  ) {
    statesGroup.style.display = "none"; // Ascundem statesGroup
    // sau statesGroup.remove(); // Pentru a elimina complet statesGroup
  }
}

function updateItemsLeft() {
  const itemsLeft = document.querySelectorAll(
    ".page__todo__container .todo__group"
  ).length;
  document.getElementById(
    "leftItemsContainer"
  ).textContent = `${itemsLeft} item${itemsLeft !== 1 ? "s" : ""} left`;
}
