console.log("hello world");
const display = document.getElementById('display');
const integerBtns = document.querySelectorAll('.integer-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

let aNum;
let bNum;
let operator;
let total
let newInteger = true;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

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
            //Solve divide by zero
            console.log('divide operation')
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

    if (aNum && bNum && operator) {
        total = operation(aNum, bNum, operator);
        if (total.length > 16) { //This is not working
            total = total.toPrecision(16);
        }
        display.innerText = total;
        aNum = false;
        bNum = false;
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

display.innerText = 0;