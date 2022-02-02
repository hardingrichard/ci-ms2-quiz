// Resource used for guidance on form validation: https://www.codebrainer.com/blog/contact-form-in-javascript

// global variables
let form = document.querySelector('form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message')
let formFeedback = document.querySelector('.form-feedback');

let isValid = false;
let isValidateActive = false;

// inputs array to be called for looping through
let inputs = [
  nameInput,
  emailInput,
  messageInput,
]

/**
 * Function to produce an error prompt and form field border 
 * color change of red if first and/or last name hasn't been input
 */
function inputValidate() {
  if (!isValidateActive) return;
  isValid = true;
  resetInput(nameInput);
  resetInput(emailInput);
  resetInput(messageInput);

  if (!nameInput.value) {
    isValid = false;
    invalidateInput(nameInput);
  }

  if (!isEmail(emailInput.value)) {
    isValid = false;
    invalidateInput(emailInput);
  }
  
  if (!messageInput.value) {
    isValid = false;
    invalidateInput(messageInput);
  }
}

/**
 * Helper function for inputValidate to clean up code for easier reading
 */
function resetInput (element) {
  element.classList.remove('invalid');
  element.nextElementSibling.classList.add('hidden');
}

function invalidateInput (element) {
  element.nextElementSibling.classList.remove('hidden')
  element.classList.add('invalid')
}

// Event listener for each loop through array and remove red error prompt from border if input
inputs.forEach(input => {
  input.addEventListener('input', () => {
    inputValidate();
  });
});

// Event listener to prevent form from submitting by default for validation control
form.addEventListener('submit', (e) => {
  e.preventDefault();
  isValidateActive = true;
  inputValidate();
  
  if (isValid) {
    form.remove();
    formFeedback.classList.remove('hidden');
  }
});

/**
 *  Function to check that the string is an email with regex epression
 */
 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return regex.test(String(email).toLowerCase());
}

// emailJS code taken and modified from emailJS.com tutorial
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      emailjs.init("user_ylIxWxgFUymrhtkjDo5o3");
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
