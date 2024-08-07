const display = document.getElementById("display");



function appendToDisplay(input) {
    if(display.value=== "ERROR!" ){  /* a button is clicked, the display will be cleared */
    clearDisplay()
}
display.value += input;
}

function clearDisplay(){ 
display.value= "";
}
function calculate (){
try{
    display.value = eval (display.value); /* dangerous code */
}catch{
    display.value= "ERROR!";

}





}