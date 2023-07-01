const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Ingrese su usuario');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Ingrese su contraseña');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener 8 caracteres')
    } else {
        setSuccess(password);
    }

}    
