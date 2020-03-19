const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkRequired([username, email, password, password2])
    checkLenght(username, 2, 16)
    checkLenght(password, 6, 20)
    checkEmail(email)
    passwordMatch(password, password2)
    validatePassword(password);
})

const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, 'Ce champs est requis')
        } else {
            showSuccess(input)
        }
    })
}

// refactoring
const checkLenght = (input, min, max) => {
    if (input.value.lenght < min) {
        showError(input, `Ce champ doit comporter au minimum ${min} caractères`)
    } else if (input.value.lenght > max) {
        showError(input, `Ce champ ne doit pas excéder ${max} caractères`)
    }
}

const showError = (input, message)=> {
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

const checkEmail = (input) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, "E-mail non valide")
    }
}

const passwordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, 'Le mot de passe ne correspond pas')
    } else {
        showSuccess(input)
    }
}

