confirm("Are you ready to go on vacation?");
console.log("Vacation packing list loaded.");

const itemInputById = document.getElementById("itemInput"); // Cached with getElementById
const itemInput = document.querySelector("#itemInput"); // Cached with querySelector
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

    // Add checkbox for packed/unpacked status
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("completed-btn");
    checkbox.addEventListener("change", togglePackedStatus);

    // Add text content for the item
    const itemTextNode = document.createTextNode(itemText);

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add("trash-btn");
    deleteBtn.addEventListener("click", () => listItem.remove());

    // Append elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(itemTextNode);
    listItem.appendChild(deleteBtn);

    // Append the item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
  }
}

// Toggle packed/unpacked status
function togglePackedStatus(e) {
  const listItem = e.target.parentElement;
  listItem.classList.toggle("packed", e.target.checked);
}

// Filter items based on packed/unpacked status
filterOption.addEventListener("change", filterItems);

function filterItems() {
  const filterValue = filterOption.value;
  const items = itemList.querySelectorAll(".itemThings");

  items.forEach((item) => {
    const isPacked = item.classList.contains("packed");
    switch (filterValue) {
      case "all":
        item.style.display = "flex";
        break;
      case "pItem":
        item.style.display = isPacked ? "flex" : "none";
        break;
      case "nItem":
        item.style.display = !isPacked ? "flex" : "none";
        break;
    }
  });
}

// DOM event-based validation for input field
itemInput.addEventListener("input", () => {
  if (!itemInput.value.trim()) {
    itemInput.style.borderColor = "red"; // Indicate validation issue
  } else {
    itemInput.style.borderColor = ""; // Clear any validation issue
  }
});
