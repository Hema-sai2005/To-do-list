const moodTasks = {
    Happy: ["Call a friend", "going to ride a bike", "go through with the nature"],
    Tired: ["sleep for some time", "Drink water", "meditation"],
    Focused: ["Study for 30 mins", "learn new things", "Work on project"]
  };
  
  function suggestTasks() {
    const mood = document.getElementById("moodSelector").value;
    const taskList = document.getElementById("taskList");
  
    if (!mood) return;
  
    taskList.innerHTML = "";
  
    moodTasks[mood].forEach(task => {
      createTaskElement(task);
    });
  }
  
  function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText !== "") {
      createTaskElement(taskText);
      input.value = "";
    }
  }
  
  function createTaskElement(text) {
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => li.classList.toggle("completed");
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }