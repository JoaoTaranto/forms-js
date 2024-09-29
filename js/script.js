const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuário é obrigatório.")
    } else {
        setSuccessFor(username);
    }

    if (email === "") {
        setErrorFor(email, "O e-mail é obrigatório.")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um e-mail válido.")
    } else {
        setSuccessFor(email)
    }

    if (password === "") {
        setErrorFor(password, "A senha é obrigatória.")
    } else if (password.length < 8) {
        setErrorFor(password, "A senha precisa conter pelo menos 8 caracteres")
    } else {
        setSuccessFor(password)
    }

    if (passwordConfirm === "") {
        setErrorFor(passwordConfirm, "A confirmação de senha é obrigatória!")
    } else if (passwordValue !== passwordConfirmValue) {
        setErrorFor(passwordConfirm, "As senhas não se coincidem!")
    } else {
        setSuccessFor(passwordConfirm)
    }

    formControls = document.querySelectorAll(".form-control")

    formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    })

    if (formIsValid) {
        console.log("O formulário está 100% válido!")
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // Add error message
    small.innerText = message;

    // Add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}


// Função para verificar e-mail:
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );  
}
