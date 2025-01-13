const calc = document.querySelector('.calculator');
const screeningInput = document.querySelector('.input');
const screeningOutput = document.querySelector('.output');

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