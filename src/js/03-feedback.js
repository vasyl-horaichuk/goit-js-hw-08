import throttle from "lodash.throttle";


const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('input[type="email"]');
const messageRef = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';
console.log(LOCALSTORAGE_KEY );



formRef.addEventListener('submit', handlerBtnSubmitForm);
formRef.addEventListener('input', hadlerInputDateForm)