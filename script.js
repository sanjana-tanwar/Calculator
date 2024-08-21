function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}
