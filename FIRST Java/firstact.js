let taskCounter = 1; 	
function myEnter() {
    let myTasks = document.getElementById("myTasks").value;
    let taskList = document.getElementById("taskList"); 

    if (myTasks.trim() !== ""){ 
    	let newTask = document.createElement("p") 

    	newTask.textContent = taskCounter + ". " + myTasks; 
    	taskList.appendChild (newTask); 	
    	taskCounter++;
    	document.getElementById("myTasks").value = ""; 
    }
}

function clearTasks() {
    document.getElementById("taskList").innerHTML = ""; 
    taskCounter = 1;
}
