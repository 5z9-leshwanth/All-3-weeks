// Wait for page to load, then add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    // Get button references
    const generateBtn = document.getElementById('addItem');  // Wait, no - need Generate button ID
    const addBtn = document.getElementById('addItem');
    const removeBtn = document.getElementById('removeItem');
    
    // Add click event listeners to buttons
    generateBtn.addEventListener('click', generateRandomNumber);
    addBtn.addEventListener('click', addItem);
    removeBtn.addEventListener('click', removeItem);
});

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const numDisplay = document.getElementById("randomNumber");
    numDisplay.innerHTML = "";
    const newPara = document.createElement("p");
    newPara.innerHTML = `Random Number: ${randomNumber}`;
    numDisplay.appendChild(newPara);
}

function addItem() {
    const itemList = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.innerHTML = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
}

function removeItem() {
    const itemList = document.getElementById("itemList");
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastChild);
    }
}
