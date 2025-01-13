const calc = document.querySelector('.calculator');
const screeningInput = document.querySelector('.input');
const screeningOutput = document.querySelector('.output');

calc.addEventListener('click', (event) => {
    event.preventDefault();

    let target = event.target;
    if (target.tagName == "BUTTON") {
        screeningInput.innerText += `${target.innerText} `;
    }
    if (target.id === "clear") {
        screeningInput.innerText = '';
    }
})