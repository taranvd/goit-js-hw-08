const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');

feedbackForm.addEventListener('input', throttle(handleInputForm, 500));
feedbackForm.addEventListener('submit', handleSubmitForm);

const NAME_KEY = 'feedback-form-state';

checkStatusLocalStorage();

function handleInputForm() {
  const formData = {
    email: emailInputEl.value,
    message: textareaEl.value,
  };

  localStorage.setItem(NAME_KEY, JSON.stringify(formData));
}

function checkStatusLocalStorage() {
  const savedResult = localStorage.getItem(NAME_KEY);
  if (savedResult) {
    const { email, message } = JSON.parse(savedResult);

    textareaEl.value = message || '';
    emailInputEl.value = email || '';
  }
}

function handleSubmitForm(e) {
  e.preventDefault();

  if (!emailInputEl.value || !textareaEl.value) {
    alert('Всі поля повинні бути заповнені');
    return;
  }

  const formData = {
    email: emailInputEl.value,
    message: textareaEl.value,
  };

  localStorage.removeItem(NAME_KEY);

  feedbackForm.reset();
  console.log(formData);
}
