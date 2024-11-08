//const vacayplace = prompt("Are you ready to go on Vacation ");

confirm("are you ready to go on vacation?");
// Caching DOM Elements
// Caching DOM Elements
const cList = document.getElementById("commentList");
const iInput = document.getElementById("item-Input");
const cBtn = document.getElementById("addItemBtn");

console.log(iInput);

// cinput.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

// let i = 0;
// create an event handler - a function that executes in response to the event
function addComment(evt) {
  // console.log(evt)
  console.log(evt.target);
  // console.log(iInput.value);
  const newComment = iInput.value;
  console.log(newComment);
  // console.log('i can output anything', ++i);

  // This wasn't in the instructions, but
  // we added a guard against empty comments
  if (newComment.trim() === "") return;

  // add the value to the comment list element
  const newLi = document.createElement("li");
  newLi.textContent = newComment;
  cList.appendChild(newLi);

  // clear the input element
  importInput.value = "";

  // focus the input element
  iInput.focus();

  // you can add an event listener
  // adding this here wouldn't make a lot of sense
  // but you can see it working
  cBtn.removeEventListener("click", addComment);
}

// the event that we are looking for is the button click
cBtn.addEventListener("click", addComment);
