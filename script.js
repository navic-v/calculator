const calc = document.querySelector('.calculator');
const screeningInput = document.querySelector('.input');
const screeningOutput = document.querySelector('.output');

const addOperation = (a, b) => a + b;
const minusOperation = (a, b) => a - b;
const multiplyOperation = (a, b) => a * b;
const divideOperation = (a, b) => a / b;

let firstNumber;
let secondNumber;
let operator;
let digits = '';

const operate = (operator, firstNumber, secondNumber) => {
    if (operator === 'add') {
        return addOperation(firstNumber, secondNumber);
    } else if (operator === 'minus') {
        return minusOperation(firstNumber, secondNumber);
    } else if (operator === 'multiply') {
        return multiplyOperation(firstNumber, secondNumber);
    } else if (operator === 'divide') {
        return divideOperation(firstNumber, secondNumber);
    }
    
}

calc.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;

    // When user click on digit btn, make a variable (digits) to connect these value (in string)
    // together, then display to the screen
    if (target.className === "digit") {
        digits += target.innerText;
        screeningInput.innerText = digits;
    }

    if (target.className === "operation") {
        operator = target.id;
        if (!firstNumber) {
            firstNumber = Number(screeningInput.innerText);
        } else {
            secondNumber = Number(screeningInput.innerText);
            operate(operator, firstNumber, secondNumber);
        }

        screeningInput.innerText = '';
        console.log(firstNumber, operator, secondNumber);
    }

    if (target.id === "subtotal") {
        secondNumber = Number(screeningInput.innerText);
        console.log(operator, firstNumber, secondNumber);
        screeningInput.innerText = operate(operator, firstNumber, secondNumber);
    }

    // When user click the clear btn, reset all things to the beginning
    if (target.id === "clear") {
        digits = '';
        screeningInput.innerText = digits;
        screeningOutput.innerText = 0;
    }
})

