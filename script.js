// JavaScript for form handling, validation, and interaction

// Add event listener to the form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Extract form data
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission (replace with actual API call if needed)
        console.log('Form submitted with data:', data);
        alert('Form submitted successfully!');

        // Reset the form
        form.reset();
    });

    // Example: Add real-time validation for specific fields
    const emailField = document.getElementById('email');
    emailField.addEventListener('input', () => {
        const emailValue = emailField.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            emailField.setCustomValidity('Please enter a valid email address.');
        } else {
            emailField.setCustomValidity('');
        }
    });

    // Example: Handle dynamic UI updates
    const checkbox = document.getElementById('toggle-section');
    const optionalSection = document.getElementById('optional-section');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            optionalSection.style.display = 'block';
        } else {
            optionalSection.style.display = 'none';
        }
    });
});
