console.log("hello world");
const display = document.getElementById('display');
const integerBtns = document.querySelectorAll('.integer-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

let aNum;
let bNum;
let operator;
let newInteger = true;

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function operation(aNum, bNum, operator) {
    let total;
    switch (operator) {
        case 'add':
            console.log('add operation')
            total = add(aNum, bNum);
            break;
        case 'subtract':
            console.log('subtract operation')
            total = subtract(aNum, bNum);
            break;
        case 'mulitply':
            console.log('multiply operation')
            total =  multiply(aNum, bNum);
            break;
        case 'divide':
            console.log('divide operation')
            total = divide(aNum, bNum);
            break;
    }
    return total;
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
        display.innerText = '';
        return;
    }

    if (!aNum) {
        aNum = Number(display.innerText);
        if (btnID !== 'equal') operator = btnID;
        newInteger = true;
        console.log('aNum: ' + aNum);
        console.log('operator: ' + operator);
        return;
    }

    if (btnID !== operator && btnID !== 'equal') {
        operator = btnID;
        console.log('operator: ' + operator);
        newInteger = true;
    }
    
    bNum = Number(display.innerText);
    
    if (operator) {
        operation(aNum, bNum, operator)
    } else {
        return;
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

/////////////////////////////////

//aNum
//bNum
//operator
//newInteger = true

//function operation(aNum, bNum, operator)
    //switch (operator)
        //case 'add':
            //return add(aNum, bNum);
            //break
        //case 'subtract':
            //return subtract(aNum, bNum);
            //break
        //case 'multiply':
            //return multiply(aNum, bNum);
            //break
        //case 'divide':
            //return divide(aNum, bNum);
            //break
        //case 'clear':
            //aNum = ''
            //bNum = ''
            //operator = ''
            //display innerText = ''    
            //break
        //case 'equal':
            //let total = operation(aNum, bNum, operator)
            //aNum = ''
            //bNum = ''
            //return total;
            //break

//function clickInteger(btnId)
    //IF newInteger === true
        //display innerText = btnID
        //newInteger = false
    //ELSE
        //IF btnID = dec
            //IF display innerText indexOf . === -1
                //display innerText += btnID
                //newInteger = false
            //ELSE
                //return
        //newInteger = false
        //display innerText = btnID

//function clickOperator(btnID)
    //IF !aNum 
        //aNum = display innerText
        //if btnID != 'equal'
            //operator = btnID
        //newInteger = true
        //return
    //IF (btnID != operator)
        //btnID = operator
        //newInteger = true
        //return
    //ELSE
        //bNum = display innerText
        //display innerText = operation(aNum, bNum, operator)
        //aNum = display innerText
        //operator = btnID

////////////////////////////
    
//clickOperator(btnID)
    //IF (!aNum) 
        //aNum = Number(display.innerText)
        //IF btnID !== 'equal'
            //operator = btnID
        //newInteger = true
        //return
    
    //IF (btnID !== operator && btnID !== 'equal')
        //operator = btnID
        //newInteger = true;
        //return

    //bNum = display.innerText
    //display.innerText = operation(aNum,bNum,operator)
    //aNum = display.innerText