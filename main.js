const arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const allButtons = document.querySelectorAll('button') 
const displayBox = document.querySelector('input')
for (let individualButton of allButtons) {
    individualButton.addEventListener('click', function () {
        if (individualButton.innerText in arrayOfNums) {
            displayBox.value += individualButton.innerText
        }

        else if (individualButton.innerText === '=') {
            displayBox.value = math.evaluate(displayBox.value)
        }

        else if (individualButton.innerText === 'C') {
            displayBox.value = ''
        }

        else {
            displayBox.value += individualButton.innerText
        }
    })
}

