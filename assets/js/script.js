document.addEventListener('DOMContentLoaded', () => {
    const valueContainer = document.getElementById('value');
    const buttons = document.querySelectorAll('.option');

    function calculateExpression() {
        try {
            if (valueContainer.value.trim() !== '') {
                const result = Function('"use strict";return (' + valueContainer.value + ')')();
                valueContainer.value = result;
            }
        } catch (err) {
            valueContainer.value = 'Error';
        }
    }

    function handleInput(value) {
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastChar = valueContainer.value.slice(-1);

        if (value === 'C') {
            valueContainer.value = '';
        } else if (value === '=') {
            calculateExpression();
        } else if (operators.includes(value) && operators.includes(lastChar)) {
            // Prevent consecutive operators
            return;
        } else {
            valueContainer.value += value;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            handleInput(value);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const validInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%'];
        const operators = ['+', '-', '*', '/', '%', '.'];
        const lastChar = valueContainer.value.slice(-1);

        if (validInputs.includes(key)) {
            if (operators.includes(key) && operators.includes(lastChar)) return;
            valueContainer.value += key;
        } else if (key === 'Enter') {
            event.preventDefault();
            calculateExpression();
        } else if (key === 'Backspace') {
            valueContainer.value = valueContainer.value.slice(0, -1);
        } else if (key === 'Escape') {
            valueContainer.value = '';
        }
    });
});
