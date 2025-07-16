let currentNumber = '0'
let previousNumber = null;
let operation = null;

function updateDisplay() {
    let displayValue = currentNumber.replace('.', ',');
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(num) {
    if (num === ',') {
        if (currentNumber.includes('.')) return;
        num = '.';
    }

    if (currentNumber === '0' && num !== '.') {
        currentNumber = num;
    } else {
        currentNumber += num;
    }

    updateDisplay();
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = null;
    operation = null;
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) {
        calculate ();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '0';
}

function calculate() {
    if (operation && previousNumber !== null) {
        const prev = parseFloat(previousNumber);
        const curr = parseFloat(currentNumber);
        let result;

        switch (operation) {
            case '+': result = prev + curr; break;
            case '-': result = prev - curr; break;
            case '*': result = prev * curr; break;
            case '/': result = curr !== 0 ? prev / curr : 'Erro'; break;
        }

        currentNumber = result.toString();
        operation = null;
        previousNumber = null;
        updateDisplay();
    }
}

function toggleSign() {
    if (currentNumber !== '0') {
        currentNumber = (parseFloat(currentNumber) * -1).toString();
        updateDisplay();
    }
}

function percentage() {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
}