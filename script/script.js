//const vacayplace = prompt("Are you ready to go on Vacation ");

confirm("are you ready to go on vacation?");

const itemInput = document.querySelector("#itemInput");
const addItemBtn = document.querySelector("#addItemBtn");
const itemList = document.querySelector("#itemList");
const filterOption = document.querySelector("#itemSelection");

addItemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addItem();
});
function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText) {
    // Create list item element
    const listItem = document.createElement("li");
    listItem.classList.add("itemThings");
    listItem.textContent = itemText;

    // Append the item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
  }
}
