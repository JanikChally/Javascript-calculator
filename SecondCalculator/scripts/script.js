let buttons = document.querySelector('.calc-button');



buttons.addEventListener('click', (event) => {
    const elmt = event.target;
    console.log(elmt)
    
    if(elmt.id === 'double'){
        document.querySelector('.calc-input').value *= 2;
    }
    else if(elmt.id === 'third'){
        document.querySelector('.calc-input').value *= .33;
    }
})