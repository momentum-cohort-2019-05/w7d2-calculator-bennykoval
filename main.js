const arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const allButtons = document.querySelectorAll('button') 
const displayBox = document.querySelector('input')
window.addEventListener('load', (event) => {
    displayBox.focus();
})

for (let individualButton of allButtons) {
    individualButton.addEventListener('click', function () {
        if (individualButton.innerText in arrayOfNums) {
            displayBox.value += individualButton.innerText;
            displayBox.focus();
        }

        else if (individualButton.innerText === '=') {
            displayBox.value = math.evaluate(displayBox.value);
            displayBox.focus();
        }

        else if (individualButton.innerText === 'C') {
            displayBox.value = '';
            displayBox.focus();
        }

        else {
            displayBox.value += individualButton.innerText;
            displayBox.focus();
        }
    })
}

