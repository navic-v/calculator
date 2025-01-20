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
let input = '';

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

    if (target.className === "digit") {
        input += target.innerText;
        screeningInput.innerText = input;
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

    if (target.id === "clear") {
        input = [];
        screeningInput.innerText = '';
        screeningOutput.innerText = 0;
    }
})