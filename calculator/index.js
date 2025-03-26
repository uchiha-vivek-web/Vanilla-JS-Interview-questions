document.getElementById('add').addEventListener('click', () => {
    const num1 = Number(document.getElementById('num-1').value);
    const num2 = Number(document.getElementById('num-2').value);

    if (!num1 && num1 !== 0 || !num2 && num2 !== 0) {
        alert("Please enter both numbers.");
        return;
    }

    document.getElementById('result').textContent = `Result: ${num1 + num2}`;
});
