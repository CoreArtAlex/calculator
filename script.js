const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  // If current display value is 0 we will replaced it if not add the number
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
    displayValue === '0' ? number : displayValue + number;
}

// Add Event Listner for Number, Operators & Decimal Buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }
});
