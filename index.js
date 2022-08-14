const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    switch(e.target.innerText) {
        case 'C': 
            display.innerText = '';
        break;
            case '=':
                display.innerText = eval(display.innerText);
            break;
        default:
         display.innerText += e.target.innerText;
    }

})