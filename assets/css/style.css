document.addEventListener('DOMContentLoaded', () => {
  const valueContainer = document.getElementById('value');
  const buttons = document.querySelectorAll('.option');

  function calculateExpression() {
    try {
      if (valueContainer.value.trim() !== '') {
        const result = Function('"use strict";return (' + valueContainer.value + ')')();
        valueContainer.value = result;
      }
    } catch {
      valueContainer.value = 'Error';
    }
  }

  function handleInput(value) {
    const operators = ['+', '-', '*', '/', '%', '.'];
    const lastChar = valueContainer.value.slice(-1);

    if (value === 'C') {
      valueContainer.value = '';
    } else if (value === '=' || value === 'Enter') {
      calculateExpression();
    } else if (value === 'Backspace') {
      valueContainer.value = valueContainer.value.slice(0, -1);
    } else if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    } else if (value !== '+/-') {
      valueContainer.value += value;
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      handleInput(button.value);
    });
  });

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validInputs = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','%'];
    const lastChar = valueContainer.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%', '.'];

    if (validInputs.includes(key)) {
      if (operators.includes(key) && operators.includes(lastChar)) return;
      valueContainer.value += key;
    } else if (key === 'Enter') {
      event.preventDefault();
      handleInput('=');
    } else if (key === 'Backspace') {
      handleInput('Backspace');
    } else if (key === 'Escape') {
      handleInput('C');
    }
  });
});
