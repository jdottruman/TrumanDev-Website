const myList = document.getElementById("myList")
const addBtn = document.getElementById("addBtn")
const textInput = document.getElementById("textInput")
const numberInput = document.getElementById("numberInput")
const dateInput = document.getElementById("dateInput")
let totalCost= 0 ; 
addBtn.addEventListener("click", addTask)

function addTask(){
    const cleanText= textInput.value.trim()
const cleanNumber= numberInput.value.trim()
const cleanDate= dateInput.value.trim()

 
if (cleanText !== "" | cleanNumber !=="" | cleanDate !==""){
const li = document.createElement("li")
li.innerHTML= `
<p><span>Product:</span>${cleanText}</p>
<p><span>Cost:</span>$${parseFloat(cleanNumber).toFixed(2)}</p>
<p><span>Date: </span> ${cleanDate}</p>

`

const deleteBtn = document.createElement("button")
deleteBtn.textContent="X"
li.appendChild(deleteBtn)
deleteBtn.classList.toggle("deleteBtn")
myList.prepend(li)
textInput.value=""
numberInput.value=""
dateInput.value=""
deleteBtn.addEventListener("click",deleteTask)
li.addEventListener("click",completed)

totalCost += parseFloat(cleanNumber)
updateTotalCost()

};


}

function completed(){
const task= event.target
task.classList.toggle("done")

}

function deleteTask(){
    const task= event.target.parentElement;
    myList.removeChild(task)
    const cost= parseFloat(task.children[1].textContent.split(":")[1])
    totalCost -= cost;
    updateTotalCost()
}


function updateTotalCost(){

    const totalCostEl = document.getElementById("totalCost");
    totalCostEl.textContent = ` Total Cost : $${parseFloat(totalCost).toFixed(2)}`
}


;



// To incorporate the total cost calculation feature into your task list application, you need to:

//     Declare a variable to store the total cost.
//     Update the total cost when a new task is added.
//     Update the total cost when a task is deleted.
//     Create a function to display the total cost.
// totalt cost in the html

// create the total cost variable

// update that total cost (inside add task function).. ur going to want to parse float the cleanumber

// update delete task function with creating a cost variable set to 2nd p element's contentent split after the :


// update the total cost within delete function.then call the update total cost function

// create the update total cost function 


// target all elements from the html
// make the addTask()
// .2 give texinput.vale to a variable
// .3 make if statement
// make completed task function
// .2 give it a class 
// .3 toggle that classs


//1. add thiis to addTask function by using event listener on click
// 2.create Delete funcion 
// 2.1 make delete button in the add task function
// 2.2 reomve child(task)
// 2.3 gave delete btn text
// 2.2.1 append to li using DOM
// 2.1.2 give delete btn function

// 3.add the actual button to the addTask()
// 4. give the buttonfunction


// 