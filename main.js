const taskInput = document.getElementById("task");
const ulList = document.getElementById("ul-list");
const audio = new Audio("/audio/notification.mp3");
const checkbox = document.getElementById("check");
const tasks = [];

// Notification trigger
function ring(select) {
  if (select.checked) {
    audio.play();
  }
}

// Function rendering all the items on the page.
function renderItems() {
  tasks.map((item) => {
    ulList.innerHTML += `<li><input type="checkbox"  onchange='ring(this)'> 
    <label><span>${item}</span></label> 
    <i class="material-icons delete">delete</i></li>`;
  });

  var currentTasks = document.querySelectorAll(".delete");
  for (let item of currentTasks) {
    item.onclick = function () {
      this.parentNode.remove();
    };
  }
}

// Event listener
taskInput.addEventListener("keypress", function (e) {
  const taskInput = document.getElementById("task");

  if (e.key == "Enter") {
    if (taskInput.value) {
      tasks.push(taskInput.value);
    } else {
      alert("You must type something");
    }

    taskInput.value = "";
    ulList.innerHTML = "";
    renderItems();
  }
});

renderItems();
