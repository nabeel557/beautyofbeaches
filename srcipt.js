const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Basic validation
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    // Show success message
    successMessage.classList.add('visible');
    setTimeout(() => {
        successMessage.classList.remove('visible');
        alert('Login Successful!');
    }, 2000);
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// SignUp Form JavaScript --------------------------------------------------------------------------------
function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the section
        });
    }
}

// fade effect JavaScript --------------------------------------------------------------------------------
  
  