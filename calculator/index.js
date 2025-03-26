document.addEventListener("DOMContentLoaded", () => {
    const add_button = document.getElementById('add');
    
    const add = (num_1_text, num_2_text) => {
        return Number(num_1_text) + Number(num_2_text);  // Convert to numbers
    };

    add_button.addEventListener('click', () => {
        const number_1 = document.getElementById('num-1').value;
        const number_2 = document.getElementById('num-2').value;

        if (number_1 === "" || number_2 === "") {
            alert("Please enter both numbers.");
            return;
        }

        const result = add(number_1, number_2);
        document.getElementById("result").textContent = `Result: ${result}`;
    });
});
