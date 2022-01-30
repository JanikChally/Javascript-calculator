console.log("Hello there");

function submit(){
    let op1 = document.getElementById('operand1').value;
    let op2 = document.getElementById('operand2').value;
    let operation = document.getElementById('operation').innerHTML;
    let  result;
    if (operation === '+'){
        result = addition(op1,op2);
    }
    else if (operation === '-'){
        result = subtraction(op1,op2);
    }
    else if (operation === 'x'){
        result = multiplication(op1,op2)
    }
    else if(operation === '/'){
        result = division(op1,op2)
    }
    document.getElementById('result').value = result;
}

function changedOperation(op) {
    document.getElementById('operation').innerHTML = op;
}

function addition(num1,num2){
    return parseFloat(num1) + parseFloat(num2);
}

function subtraction(num1, num2){
    return num1 - num2;
}
function multiplication(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}