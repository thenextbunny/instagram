/* EN - Checks username and password input. After that activate and deactivate the login button and change your background. */
/* PT-BR - Verifica o conteúdo nas entradas de nome de usuário e senha. Depois disso ativa e desativa o botão de login e altera seu plano de fundo. */
const user = document.querySelector('#user');
const password = document.querySelector('#password');
const logIn = document.querySelector('#login');

password.addEventListener('keyup', verify);
user.addEventListener('keyup', verify);
logIn.disabled = true;

function verify() {
    if (user.value.length > 1 && password.value.length > 5) {
        logIn.disabled = true; /* Form submission is disabled. Switch to false to enable.*/
        logIn.style.background = '#0095f6';
        logIn.style.cursor = "pointer";
    } else {
        logIn.disabled = true;
        logIn.style.background = '#b2dffb';
        logIn.style.transition = '0.5s'
        logIn.style.cursor = "default";
    }
}

/* EN - Checks if the user has typed any value in the password entry and with that shows the password preview button. */
/* PT-BR - Verifica se o usuário digitou algum valor na entrada de senha e com isso mostra o botão de visualização de senha. */
const passwordShow = document.querySelector(".password-show");
const passwordHide = document.querySelector(".password-hide")
const passwordView = document.querySelector(".password-view");
    
passwordView.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        passwordShow.style.display = "none";
        passwordHide.style.display = "block";
    } else {
        password.type = "password";
        passwordShow.style.display = "block";
        passwordHide.style.display = "none";
    }
})