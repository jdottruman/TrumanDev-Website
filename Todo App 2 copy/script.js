// get all the elements of the html\
const textInput = document.getElementById("textInput");
const taskList = document.getElementById("myUL");

function newTask(){
// create a variable for the text that was placed in the input
const taskText  = textInput.value.trim()
;
// if statement to handle the text/task added
if(taskText !== ""){
    // create a list item to put the text valu in 
    const li = document.createElement("li");
// newly create li element should equal what was inputted
    li.textContent= taskText;
    // add the li to the UL
    taskList.appendChild(li);

    li.addEventListener('click', completeTask);

    // make the actual button 
const deleteBtn = document.createElement("button");
// give the button some text
deleteBtn.textContent = "Delete";

// give the button function

deleteBtn.addEventListener('click',deleteTask); 
// link the  button to the list item 

li.appendChild(deleteBtn);

    // set the input back to nothing
    taskText.value = "";
    textInput.value= ""
}

}

// function for completetion
function completeTask(event){
    const task = event.target;
    task.classList.toggle('completed');
}

// function to delete the task

function deleteTask (event){
    const task = event.target.parentElement;
    taskList.removeChild(task);

}

