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
    addOperation(firstNumber, secondNumber);
}

calc.addEventListener('click', (event) => {
    event.preventDefault();

    // Add variable to store the number input
    let input = [];

    let target = event.target;
    if (target.tagName == "BUTTON") {
        if (target.className == "operation") {
            input.push(screeningInput.innerText);
            console.log(input);
        }
        screeningInput.innerText += `${target.innerText} `;
    }
    if (target.id === "clear") {
        input = [];
        screeningInput.innerText = '';
        screeningOutput.innerText = 0;
    }
})