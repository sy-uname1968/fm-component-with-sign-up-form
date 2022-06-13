const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');


const validateForm = (e) => {
    e.preventDefault();
    
    if (firstName.value === '') {
        showError(firstName, 'First name is required');
    } else {
        showSuccess(firstName);
    }
    
    if (lastName.value === '') {
        showError(lastName, 'Last name is required');
    } else {
        showSuccess(lastName);
    }
    // check if email is valid email address with regex
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!email.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }
    // check password is not empty
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

}

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-element error';
    const errorMessage = formControl.querySelector('.error-message');
    errorMessage.innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-element';
}

// Event Listeners for form submission
form.addEventListener('submit', validateForm);


