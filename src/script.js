let passwordWrapper = document.querySelector('.input-wrapper.error');
let passwordCheckWraper = document.querySelector('.input-wrapper.error:last-child');
let password = passwordWrapper.querySelector('input');
let passwordCheck = passwordCheckWraper.querySelector('input');
let form = document.querySelector('form');

password.onfocus = passwordCheck.onfocus = onFocus;
password.onblur = passwordCheck.onblur = onBlur;
form.onsubmit = () => false;

function onFocus() {
  passwordWrapper.classList.remove('error');
  passwordCheckWraper.classList.remove('error');
}

function onBlur() {
  if (
    !isPasswordOk(password.value)
    || !isPasswordOk(passwordCheck.value)
    || password.value !== passwordCheck.value
    ) {
    passwordWrapper.classList.add('error');
    passwordCheckWraper.classList.add('error');
  }
}

function isPasswordOk(str) {
  return str != undefined && str != '';
}
