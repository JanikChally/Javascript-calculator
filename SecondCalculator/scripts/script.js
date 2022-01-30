let buttons = document.querySelector('.calc-button');
const testFunction = function(n1,n2){
    
}
const calculate = { //object literal
    'add': function(n1, n2) {
        return n1 + n2;
    },
    'sub': function(n1, n2){
        return n1 - n2;
    },
    'mult': function(n1, n2){
        return n1 * n2;
    },
    'divide': function(n1, n2){
        return n1 / n2;
    }
}
const calculator = document.querySelector('.calculator');
calculator.dataset.firstNumber="";
calculator.dataset.secondElmt="";
buttons.addEventListener('click', (event) => {
    const elmt = event.target;
    const display = document.querySelector('.calc-input');
    const calculator = document.querySelector('.calculator');
    
    
  
   
    if (elmt.id === 'double') {
        document.querySelector('.calc-input').value *= 2;

    } else if (elmt.id === 'third') {
        document.querySelector('.calc-input').value *= .33;

    }else if (elmt.id ==='decimal'){//if for decimals
        if(!display.value.includes('.')){
            display.value += elmt.textContent;

        }
    } else if (elmt.classList.contains('number-button')) {//if for numbers
        if(display.value === '0'){
            display.value = elmt.textContent;
        }else{
            display.value += elmt.textContent;
        }

    }else if(elmt.id === 'clear'){
        display.value=0;
        calculator.dataset.firstNumber="";
        calculator.dataset.secondElmt="";
        
    }else if(elmt.id ==='negative'){//Button for +/- sign
        if(!display.value.includes('-')){
            if(display.value !=='0'){
                display.value = '-' + display.value;
            }
        }
        else {
            display.value = display.value.slice(1);
        }
    }else if(elmt.id ==='perc'){
        display.value = display.value / 100;
    }

    
    else if(elmt.classList.contains('operator-button')){
        
        if(calculator.dataset.secondElmt ===''){
            calculator.dataset.firstNumber=display.value;//stores current value
            calculator.dataset.secondElmt=elmt.id;//stores operand elemt pressed
            display.value = 0;
            
            console.log('test 2');
        }
        else{
            calculator.dataset.secondElmt=elmt.id;
        }
        //if (calculator.secondElmt === mult){
            //calculate(firstNumber,thirdNumber)
        //}
        // display.value = calculate[calculator.dataset.secondElmt](parseFloat(calculator.dataset.firstNumber), parseFloat(display.value))
        
    }

    else if(elmt.id === 'equal'){
        if(calculator.dataset.firstNumber && calculator.dataset.secondElmt){
            display.value = calculate[calculator.dataset.secondElmt](parseFloat(calculator.dataset.firstNumber), parseFloat(display.value))
            //x['y']()
            //equivalent to
            //x.y()
            console.log('Passed');

        }
        else{
            console.log('not passed');
        }
        calculator.dataset.firstNumber="";
        calculator.dataset.secondElmt="";
        
    }
    // let calculate = (firstNum,operand,secondNum)=> {
    //     return firstNum `${operand}` secondNum;
    //     } 
    console.log(calculator.dataset);
})

