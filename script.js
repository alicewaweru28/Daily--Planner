//Current time display
var timeDisplay = $("#time-display");

setInterval("displayTime()", 1000);

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}

//local storage area for text box'
var saveButton = document.querySelector(".saveBtn");
var comment = document.getElementById("todo");

function addToDo() {
  var newToDo = {
    comment: comment.value.trim(),
  };
  localStorage.setItem("addToDo", JSON.stringify(newToDo));
}

function renderToDo() {
  var lastToDo = JSON.parse(localStorage.getItem("newToDo"));

  if (lastToDo !== null) {
    document.getElementById("saved-comment").innerHTML = lastToDo.comment;
  } else {
    return;
  }
}

const allTimeBlocks = document.querySelectorAll(".timeblock");

//highlighting area depending on time of day
const timeHighlight = function () {

  console.log("*********");
  const currentTime = 12;//moment().hour();

  allTimeBlocks.forEach((timeblock) => {
    const hour = parseInt(timeblock.getAttribute("hour"));

    console.log("*****hours",hour);
    if (currentTime > hour) {
      $(timeblock).addClass("past");
    } else if (currentTime == hour) {
      $(timeblock).addClass("present");
    } else if (currentTime < hour) {
      $(timeblock).addClass("future");
    }
  });
};

timeHighlight();

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  addToDo();
  renderToDo();
});

function init() {
  renderToDo();
}

init();
