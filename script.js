const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', function() {
        // Only allow numeric input
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Move to next input if current input is filled
        if (this.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', function(event) {
        // Handle backspace
        if (event.key === 'Backspace') {
            // If current input is empty, move to previous input and clear it
            if (this.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = '';
            } else if (this.value.length > 0) {
                // If input has a value, clear it
                this.value = '';
            }
        }
    });
});

// Set initial focus on the first input
inputs[0].focus();