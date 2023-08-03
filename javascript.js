const add = (a,b) => {
    return a + b;
}

const subst = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    if(b === 0) return "ERROR";
    return a / b;
}

function OperationObj(first,operator,second) {
    this.firstNum = parseInt(first);
    this.operator = operator;
    this.second = parseInt(second);
}

const operate = (operation) => {
    switch (operation.operator){
        case "+":
            return add(operation.firstNum,operation.second);
        case "-":
            return subst(operation.firstNum,operation.second);
        case "x":
            return multiply(operation.firstNum,operation.second);
        case "/":
            return divide(operation.firstNum,operation.second);
        default:
            console.log("Operator Unknown");
    }


}

const getDisplay = document.querySelector('#operationDisplay');

const ceroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');

const sumButton = document.querySelector('#sum');
const substButton = document.querySelector('#subst');
const multiplyButton = document.querySelector('#multiply');
const divButton = document.querySelector('#division');

const clearButton = document.querySelector('#C');
const equalsButton = document.querySelector('#equals');
const resultScreen = document.querySelector('#resultDisplay');


let displayString = '';
let oneOperatorBool = true;

equalsButton.addEventListener('click', () => {
    let splitRes = displayString.split(' ');

    let operationCalc = new OperationObj(splitRes[0], splitRes[1],splitRes[2]);

    let result  = operate(operationCalc);

    resultScreen.textContent = result.toString();
    displayString = '';
    displayString += result;

    getDisplay.textContent = displayString;
    oneOperatorBool = true;


})
clearButton.addEventListener('click', () => {
    displayString = '';
    oneOperatorBool = true;
    getDisplay.textContent = displayString;
    resultScreen.textContent = '';
});

sumButton.addEventListener('click', () => {
    if(oneOperatorBool){
        displayString += " + ";
    }
    getDisplay.textContent = displayString;
    oneOperatorBool = false;
});
substButton.addEventListener('click', () => {
    if(oneOperatorBool){
        displayString += " - ";
    }
    getDisplay.textContent = displayString;
    oneOperatorBool = false;

});
multiplyButton.addEventListener('click', () => {
    if(oneOperatorBool){
        displayString += " x ";
    }
    getDisplay.textContent = displayString;
    oneOperatorBool = false;

});
divButton.addEventListener('click', () => {
    if(oneOperatorBool){
        displayString += " / ";
    }
    getDisplay.textContent = displayString;
    oneOperatorBool = false;

});


ceroButton.addEventListener('click', () => {
    displayString += "0";
    getDisplay.textContent = displayString;
});
oneButton.addEventListener('click', () => {
    displayString += "1";
    getDisplay.textContent = displayString;
});
twoButton.addEventListener('click', () => {
    displayString += "2";
    getDisplay.textContent = displayString;

});
threeButton.addEventListener('click', () => {
    displayString += "3";
    getDisplay.textContent = displayString;

});
fourButton.addEventListener('click', () => {
    displayString += "4";
    getDisplay.textContent = displayString;

});
fiveButton.addEventListener('click', () => {
    displayString += "5";
    getDisplay.textContent = displayString;

});
sixButton.addEventListener('click', () => {
    displayString += "6";
    getDisplay.textContent = displayString;

});
sevenButton.addEventListener('click', () => {
    displayString += "7";
    getDisplay.textContent = displayString;

});
eightButton.addEventListener('click', () => {
    displayString += "8";
    getDisplay.textContent = displayString;

});
nineButton.addEventListener('click', () => {
    displayString += "9";
    getDisplay.textContent = displayString;

});



