 function getInputTextById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputNumber;
 }

 function setElementById(textId ,data){
    const calculate = document.getElementById(textId)
    calculate.innerText = data;
 }