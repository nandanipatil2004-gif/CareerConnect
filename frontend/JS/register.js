document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    if (!registerForm) return;

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Safe value fetching using fallback IDs
        const nameInput = document.getElementById('fullName') || document.getElementById('name');
        const emailInput = document.getElementById('registerEmail') || document.getElementById('email');
        const passwordInput = document.getElementById('registerPassword') || document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const password = passwordInput ? passwordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

        const roleElement = document.querySelector('input[name="role"]:checked');
        const role = roleElement ? roleElement.value : 'student';

        if (confirmPasswordInput && password !== confirmPassword) {
            alert('Password aur Confirm Password match nahi kar rahe hain!');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, role })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration Successful! Ab Login kijiye.');
                window.location.href = './login.html';
            } else {
                alert('Error: ' + (data.message || 'Registration failed'));
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            alert('Server Error! Check karein ki backend terminal mein chal raha hai.');
        }
    });
});