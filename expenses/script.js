const table = document.getElementById("table");
const textInput = document.getElementById("textInput");
const dateInput = document.getElementById("dateInput");
const amountInput = document.getElementById("amountInput");
const amountValue =parseFloat(amountInput.value).toFixed(2);
const total = document.getElementById("runningTotal")
let runningTotal = 0;

function addExpense(){
const textValue= textInput.value;
const dateValue = dateInput.value;
const amountValue = parseFloat(amountInput.value).toFixed(2);
if ( textValue !== "" && dateValue !== "" && amountValue !== "" ){

    
    // creating elements to add to table
const tableRow= document.createElement("tr")
const textRow= document.createElement("td")

const dateRow= document.createElement("td")

const amountRow= document.createElement("td")

// (pt2)creating the delete button element
const deleteBtn = document.createElement("button")
// end of creating 
// giving text
textRow.innerText= textValue;
dateRow.innerText= dateValue;
amountRow.innerHTML= `$${amountValue}`;
deleteBtn.innerText="X"
// end of text
// append the rows to newly created row
tableRow.appendChild(textRow);
tableRow.appendChild(dateRow);
tableRow.appendChild(amountRow);
tableRow.appendChild(deleteBtn)
table.appendChild(tableRow)


textInput.value="";
dateInput.value="";
amountInput.value="";

// add event listener to the deleteBtn to link the deleteExpense function
deleteBtn.addEventListener("click",deleteExpense )
// end of EL


runningTotal += parseFloat(amountValue);
total.innerHTML=`$ ${runningTotal.toFixed(2)} `;





}

}


// (pt2) create delete function
function deleteExpense(){

const expense= event.target.parentElement;

const amount = parseFloat(expense.children[2].innerText.slice(1));

// removing itself from the table element
table.removeChild(expense)
runningTotal -= amount;
total.innerHTML= parseFloat(runningTotal).toFixed(2)


if(runningTotal <= 0 ){

total.innerHTML=``;
}

}
