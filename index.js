////Approach 1
// const input = document
//   .getElementById("input")
//   .addEventListener("click", addingEventListener);

// function addingEventListener() {
//   alert("I have been clicked");
// }

////Approach 2
// function addingEventListener() {
//   const input = document.getElementById("input");
//   alert("I was clicked!");
// }
// input.addEventListener("click", addingEventListener);

//Approach 3
function addingEventListener() {
  const input = document.getElementById("input");
  input.addEventListener("click", addingEventListener);
  alert("I was clicked!");
}
addingEventListener();
