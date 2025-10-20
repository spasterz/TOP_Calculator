console.log("hello world");
const display = document.getElementById('display');
const integerBtns = document.querySelectorAll('.integer-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

let aNum = null;
let bNum = null;
let operator;
let total
let newInteger = true;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
// const divide = (a,b) => a / b;

function divide(a,b) {
    if (b === 0) { 
        return "Not a Number"
    } else {
        console.log('divide operation')
        return a / b
    }
}

function operation(aNum, bNum, operator) {
    switch (operator) {
        case 'add':
            console.log('add operation')
            return add(aNum, bNum);
        case 'subtract':
            console.log('subtract operation')
            return subtract(aNum, bNum);
        case 'multiply':
            console.log('multiply operation')
            return multiply(aNum, bNum);
        case 'divide':
            console.log('divide operation');
            return divide(aNum, bNum);
        }  
    }

function clickInteger(btnID) {
    if (newInteger === true) {
        display.innerText = btnID;
        newInteger = false
    } else {
        if (btnID === 'dec') {
            if (display.innerText.indexOf('.') === -1) {
                display.innerText += '.';
                newInteger = false;
                return;
            } else {
                return;
            }
        }
        newInteger = false;
        display.innerText += btnID;
    }
}

function clickOperator(btnID) {

    if (btnID === 'clear') {
        aNum = false;
        bNum = false;
        operator = false;
        total = false;
        newInteger = true;
        display.innerText = 0
        return;
    }

    if (!aNum) {
        aNum = Number(display.innerText);
        newInteger = true;
    } else {
        bNum = Number(display.innerText);
        newInteger = true;
    }

    if (aNum !== null && bNum !== null && operator) {
        total = operation(aNum, bNum, operator);
        console.log(total);
        if (total.toString().length > 16) { //This is not working
            total = total.toPrecision(16);
        }
        display.innerText = total;
        aNum = null;
        bNum = null;
        newInteger = true;
        if (btnID === 'equal') {
            operator = false;
            return;
        }
    }

    if (operator !== btnID && btnID !== 'equal') {
        operator = btnID
    }

}

integerBtns.forEach(button => {
    button.addEventListener('click', () => {
        let btnID = button.getAttribute('data-type');
        console.log("integer btn clicked!");
        clickInteger(btnID);
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        let btnID = button.getAttribute('data-type');
        console.log("operator btn clicked!");
        clickOperator(btnID);
    })
})

document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    if (keyPressed >= 0 && keyPressed <= 9) {
        clickInteger(keyPressed);
    }
});

display.innerText = 0;