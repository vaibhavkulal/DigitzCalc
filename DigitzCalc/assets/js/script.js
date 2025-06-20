document.addEventListener('keydown', (event) => {
    const valueContainer = document.getElementById('value');
    const key = event.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%'].includes(key)) {
        valueContainer.value += key;
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission if any
        try {
            let result = eval(valueContainer.value);
            valueContainer.value = result;
        } catch (err) {
            valueContainer.value = 'Error';
        }
    } else if (key === 'Backspace') {
        valueContainer.value = valueContainer.value.slice(0, -1);
    } else if (key === 'Escape') {
        valueContainer.value = '';
    }
});
