const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Ingrese su usuario');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Ingrese un correo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'EL correo no es valido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Ingrese una contraseña');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Vuelva a ingresar la contraseña');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
    }

  

};
