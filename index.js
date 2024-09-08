const form = document.getElementById('form');
const nameA = document.getElementById('Name');
const gname = document.getElementById('GName');
const email = document.getElementById('email1');
const age = document.getElementById('age1');
const message = document.getElementById('message1');
const successMessage = document.getElementById('Sucess'); // Select the success <p> tag

function clearAll() {
    nameA.value = '';
    gname.value = '';
    email.value = '';
    age.value = '';
    message.value = '';
}

const setError = (element, message1) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message1;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email1) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email1).toLowerCase());
};

const validateInputs = () => {
    const name1 = nameA.value.trim();
    const gname1 = gname.value.trim();
    const email1 = email.value.trim();
    const age1 = age.value.trim();
    const msg = message.value.trim();

    let isFormValid = true; // Track if the form is valid

    if (name1 === '') {
        setError(nameA, '*Name is compulsory');
        isFormValid = false;
    } else {
        setSuccess(nameA);
    }

    if (gname1 === '') {
        setError(gname, '*Guardian name is necessary');
        isFormValid = false;
    } else {
        setSuccess(gname);
    }

    if (email1 === '') {
        setError(email, '*Email is compulsory');
        isFormValid = false;
    } else if (!isValidEmail(email1)) {
        setError(email, 'Provide a valid email address');
        isFormValid = false;
    } else {
        setSuccess(email);
    }

    if (age1 === '') {
        setError(age, '*Age is mandatory');
        isFormValid = false;
    } else {
        setSuccess(age);
    }

    if (msg === '') {
        setError(message, '*Write something for the message');
        isFormValid = false;
    } else {
        setSuccess(message);
    }

    if (isFormValid) {
        successMessage.innerText = 'Validation successful!';
        clearAll();
    } else {
        successMessage.innerText = ''; // Clear success message if form is invalid
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});
