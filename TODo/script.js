const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const list = document.getElementById("list");

submitBtn.addEventListener("click", newTask)


function newTask(){
 const deleteBtn= document.createElement("button");
 deleteBtn.textContent= "X"
 deleteBtn.addEventListener("click", deleteTask)
 const taskText = textInput.value; 


if (taskText !== ""){

    const li = document.createElement("li")

    li.innerHTML= taskText;

    list.appendChild(li)
    li.appendChild(deleteBtn)


}
textInput.value=""



}

function deleteTask(){
const task = event.target.parentElement;
list.removeChild(task)
   
    
}