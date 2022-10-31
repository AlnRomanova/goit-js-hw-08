const form = document.querySelector('.feedback-form');
const output = document.querySelector('input');
const LOCALSTORAGE_KEY = 'feedback-form-state';


function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Message: ${message.value}`);
  event.currentTarget.reset();
}

updateOutput();
form.addEventListener('input', saveMessage)

function saveMessage(event) {
  event.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.email.value, form.elements.message.value);
  updateOutput();
  form.reset();
}


function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || '';
}
