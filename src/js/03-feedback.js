import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', handlerBtnSubmitForm);
formRef.addEventListener('input', throttle(hadlerInputDateForm, 500));


const object = {}

const hadlerInputDateForm = (e) => {
    object[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
};

const handlerBtnSubmitForm = (e) => {
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};


(function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const emailRef = document.querySelector('input[type="email"]');
    const messageRef = document.querySelector('textarea[name="message"]');
  if (data) {
    emailRef.value = data.emailRef;
    messageRef.value = data.messageRef;
  }
}());
