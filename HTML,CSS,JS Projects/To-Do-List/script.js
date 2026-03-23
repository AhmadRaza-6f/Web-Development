const enteredText = document.getElementById("input-text");
const containerText = document.getElementById("text-container");
const text = document.getElementById("add");
const toDoClicked = document.getElementById("pp");
// task add
text.addEventListener("click", added);
function added(e) {
  if (enteredText.value === "") alert("Please Fill the Field first");
  else {
    let li = document.createElement("li");
    li.innerHTML = enteredText.value;
    containerText.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    enteredText.value = "";
  }
  saveDataInBrowser();
}

// delete and checked logic

containerText.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveDataInBrowser();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveDataInBrowser();
  }
});
// delete data permanently
toDoClicked.addEventListener("click", () => {
  localStorage.removeItem("data");
  containerText.innerHTML = "";
});
function saveDataInBrowser() {
  localStorage.setItem("data", containerText.innerHTML);
}

function showData() {
  containerText.innerHTML = localStorage.getItem("data");
}
showData();
