const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"');

feedbackForm.addEventListener('input', throttle(handleInputForm, 500));
feedbackForm.addEventListener('submit', handleSubmitForm);

const NAME_KEY = 'feedback-form-state';

const formData = {};

checkStatusLocalStorage();

function handleInputForm(e) {
  e.preventDefault();

  formData[e.target.name] = e.target.value;

  localStorage.setItem(NAME_KEY, JSON.stringify(formData));
}

function checkStatusLocalStorage() {
  const savedResult = localStorage.getItem(NAME_KEY);
  if (savedResult) {
    const { email, message } = JSON.parse(savedResult);

    textareaEl.value = message;
    emailInputEl.value = email;
  }
}

function handleSubmitForm() {
  localStorage.removeItem(NAME_KEY);

  console.log(formData);
}
