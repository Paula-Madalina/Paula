const itemList = document.querySelector("#item-list");
let draggingItem = null;

// generate random colors
function generateRandomColors() {
    var letters = "0123456ABCDEF";
    var color = "#";
    for(let i= 0; i<6; i++) {
        color +=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

// set background for each item

let items = document.querySelectorAll("#item-list li");
items.forEach(function (item) {
    item.computedStyleMap.backgroundColor = generateRandomColors();
});

// add event for drag and drop
itemList.addEventListener("dragstart", handleDragStart);
itemList.addEventListener("dragover", handleDragOver);
itemList.addEventListener("drop", handleDrop);

function handleDragStart(e) {
    draggingItem = e.target;
    draggingItem.classList.add("dragging");

}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    const dropTarget = e.target;

    // check if the drop target is a valid list item
    if(dropTarget.tagName.toLowerCase()==="li") {
        const dropIndex = Array.from(itemList.children).
        indexOf(dropTarget);
        const draggingIndex = Array.from(itemList.children).
        indexOf(draggingItem);

        // reorder the items in the array using splice()

        const items = Array.from(itemList.children);

        // swap positions of draggingItem and dropTarget;

        items[draggingIndex] = dropTarget;
        items[dropIndex] = draggingItem;

        // remove the dragging class from the previous dragging item
        draggingItem.classList.remove("dragging");

        // rebuild the item list in the UI
        itemList.innerHTML = "";
        items.forEach(item => itemList.appendChild(item));
    }

}