const calc = document.querySelector('.calculator');
const screeningInput = document.querySelector('.input');
const screeningOutput = document.querySelector('.output');

const addOperation = (a, b) => a + b;
const minusOperation = (a, b) => a - b;
const multiplyOperation = (a, b) => a * b;
const divideOperation = (a, b) => a / b;

let firstNumber = null;
let secondNumber = null;
let operator = '';
let digits = '';
let result = 0;

const operate = (operator, firstNumber, secondNumber) => {
    if (secondNumber == 0) {
        return 'ERROR! Could not divide to 0!';
    }
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

    // This logic will happen when user click the operation btn
    // To make the operation happens, we need 2 numbers and the operator
    if (target.className === "operation") {

        if (!firstNumber) {
            // In the beginning, there is no numbers out there,
            // so we store the value of 'digits' variable in firstNumber variable
            firstNumber = Number(digits);
            // Store the current operator
            operator = target.id;
            // Reset the 'digits' variable to let user input next number
            digits = '';
        } else {
            // Store the number in 'digits' variable as the secondNumber.
            secondNumber = Number(digits);
            // Make the operation between firstNumber and secondNumber using stored operation
            result = operate(operator, firstNumber, secondNumber);
            // The result wil be displayed on screen
            screeningInput.innerText = result;
            // Store the current operator for the next operation
            operator = target.id;
            // The result will also become firstNumber for the next operation
            firstNumber = result;
            // Reset the 'digits' variable to let user input next number
            digits = '';
        }
        console.log(firstNumber, operator, secondNumber);
    }

    if (target.id === "subtotal") {
        // Store the number in 'digits' variable as the secondNumber.
        secondNumber = Number(digits);
        // Make the operation between firstNumber and secondNumber using stored operation
        result = operate(operator, firstNumber, secondNumber);
        // The result wil be displayed on screen
        screeningInput.innerText = result;
        // Reset the 'digits' variable to let user input next number
        digits = '';
    }

    // When user click the clear btn, reset all things to the beginning
    if (target.id === "clear") {
        firstNumber = null;
        secondNumber = null;
        operator = '';
        digits = '';
        result = 0;
        screeningInput.innerText = digits;
        screeningOutput.innerText = 0;
    }
})

