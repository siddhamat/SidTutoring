document.getElementById('tutoring-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        unit: document.getElementById('unit').value,
        times: document.getElementById('times').value,
    };

    const response = await fetch('/submit-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const message = document.getElementById('response-message');
    if (response.ok) {
        message.textContent = 'Thank you! Your request has been submitted.';
        message.style.color = '#FF3B3F'; /* Vibrant red */
    } else {
        message.textContent = 'Oops! Something went wrong. Please try again.';
        message.style.color = 'red';
    }
});
