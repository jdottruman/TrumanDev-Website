const textInput = document.getElementById('textInput');
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");

function generateQR(){
qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${textInput.value}`

if(textInput.value ==""){
    qrImage.src=""  
}


}