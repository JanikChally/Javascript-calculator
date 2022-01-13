let buttons = document.querySelector('.calc-button');



buttons.addEventListener('click', (event) => {
    const elmt = event.target;
    const display = document.querySelector('.calc-input');
    console.log(elmt)

    if (elmt.id === 'double') {
        document.querySelector('.calc-input').value *= 2;

    } else if (elmt.id === 'third') {
        document.querySelector('.calc-input').value *= .33;

    } else if (elmt.className === 'number-button') {
        if(display.value === '0'){
            display.value = elmt.textContent;
        }else{
            display.value += elmt.textContent;
        }

    }else if(elmt.id === 'clear'){
        display.value = 0;
    }else if (elmt.id ==='decimal'){
        if(!display.value.includes('.')){
            display.value += elmt.textContent;
        }
    }else if(elmt.id ==='negative'){
        if(!display.value.includes('-')){
            if(display.value !=='0'){
                display.value = '-' + display.value;
            }
        }
        else {
            display.value = display.value.slice(1);
        }
    }



})

