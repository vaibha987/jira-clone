const heading = document.getElementById("app");
heading.innerHTML = `<h1>!Jira Board!</h1>`;
heading.setAttribute("contenteditable", true);

const DEFAULT_TASK_CARD_MESSAGE = "Write Your Task Here";
const BLANK_TEXT = "";

let taskButton = document.getElementById("addTask");
let plannedColumn = document.getElementById("planned");

let count = 0;
taskButton.addEventListener("click", () => {
  let taskCard = document.createElement("div");
  taskCard.setAttribute("class", "taskCard");
  taskCard.setAttribute("id", `taskCard-${++count}`);
  taskCard.setAttribute("contenteditable", true);
  taskCard.setAttribute("draggable", true);
  taskCard.innerHTML = DEFAULT_TASK_CARD_MESSAGE;

  plannedColumn.appendChild(taskCard);

  // When we click, the existing text should get removed
  taskCard.addEventListener("click", (event) => {
    if (taskCard.innerText === DEFAULT_TASK_CARD_MESSAGE) {
      taskCard.innerHTML = BLANK_TEXT;
    }
  });

  // Removes the Card which was created but didn't have any value entered
  taskCard.addEventListener("blur", (event) => {
    if (taskCard.innerHTML === BLANK_TEXT) {
      taskCard.remove();
    }
  });

  taskCard.addEventListener("dragstart", (dragEvent) => {
    let selectedCardId = dragEvent.target.id;
    dragEvent.dataTransfer.setData("text", selectedCardId);
    taskCard.style.opacity = 0.8;
  });

  taskCard.addEventListener("dragend", (dragEvent) => {
    taskCard.style.opacity = 1;
  });

  let dragEvents = ["dragover", "dragenter", "drop"];

  dragEvents.forEach((value) => {
    let cols = document.getElementsByClassName("column");

    for (let col of cols) {
      col.addEventListener(value, (event) => {
        event.preventDefault();

        if (value === "drop") {
          let selectedCardId = event.dataTransfer.getData("text");
          let selectedCard = document.getElementById(selectedCardId);
          col.append(selectedCard);
        }
      });
    }
  });
});

const button=document.getElementById("toggle")
button.addEventListener("click",()=>{
style.backgroundColor="red"
});  

button.addEventListener("blur",()=>{
 style.backgroundColor="grey" 
})
