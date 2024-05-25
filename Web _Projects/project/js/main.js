// Login/Register/Reset Show Form

function showLoginForm() {
    document.querySelector('.register-form').classList.remove('active');
    document.querySelector('.reset-password-form').classList.remove('active');
    document.querySelector('.login-form').classList.add('active');
}

function showRegisterForm() {
    document.querySelector('.register-form').classList.add('active');
    document.querySelector('.reset-password-form').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active');
}

function showResetPasswordForm() {
    document.querySelector('.login-form').classList.remove('active');
    document.querySelector('.register-form').classList.remove('active');
    document.querySelector('.reset-password-form').classList.add('active');
}