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

    // Add variable to store the number input
    let input = [];

    let target = event.target;
    // if (target.tagName == "BUTTON") {
    //     if (target.className == "operation") {
    //         input.push(screeningInput.innerText);
    //         console.log(input);
    //     }
    //     screeningInput.innerText += `${target.innerText} `;
    // }

    if (target.className === "digit") {
        screeningInput.innerText += target.innerText;
    }

    if (target.className === "operation") {
        firstNumber = Number(screeningInput.innerText);
        operator = target.id;
        screeningInput.innerText = '';
        console.log(firstNumber, operator);
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