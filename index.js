let numEl = document.querySelector('#rollednum')

function numRoll() {
    let randomNum = Math.floor(Math.random() * 20 + 1)
    numEl.textContent = randomNum;
}