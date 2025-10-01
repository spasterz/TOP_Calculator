console.log("hello world");
const display = document.getElementById('display');
const integerBtns = document.querySelectorAll('.integer-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
let multiplyOperation = false;
let divideOperation = false;
let addOperation = false;
let subtractOperation = false;
let equalOperation = false;
let aNum;
let bNum;

console.table(integerBtns);
console.table(operatorBtns);
console.log(display);

function clear() {
    display.innerText = ""
}

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


///////


integerBtns.forEach(button => {
    button.addEventListener('click', () => {
        let id = button.getAttribute('data-type');
        if (id === "dec") {
            if (display.innerText.indexOf('.') === -1) {
                return display.innerText += '.'
            } else {
                console.log("decimal found");
                return
            }
        }

        display.innerText += id;
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        let id = button.getAttribute('data-type');
        console.log(id + " btn clicked!");
        if (id === "clear") clear();
    })
})