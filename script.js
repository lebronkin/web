const form = document.querySelector(".my-form");
const loginInput = form.querySelector(".username");
const emailInput = form.querySelector(".email")
const passwordInput = form.querySelector(".password");
const confirmPasswordInput = form.querySelector(".confirm-password");
const btn = document.querySelector('.btn-toggle');
btn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
})
form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Получаем значения полей формы
    const username = loginInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!username || !email || !password || !confirmPassword) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    if (!isValidUsername(username)) {
        alert('Логин может содержать только буквы на латинице и цифры');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }

    form.submit();
});

function isValidUsername(username) {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(username);
}

function isValidPassword(password) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;
    return pattern.test(password);
}