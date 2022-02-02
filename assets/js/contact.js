// Resource used for guidance on form validation: https://www.codebrainer.com/blog/contact-form-in-javascript

// global variables
let form = document.querySelector('form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let formFeedback = document.querySelector('.form-feedback');

let isValid = false;

let inputs = [
  nameInput,
  emailInput,
]
/**
 * Function to produce an error prompt and form field border 
 * color change of red if first and/or last name hasn't been input
 */
function inputValidate() {
  isValid = true;
  resetInput(nameInput);
  resetInput(emailInput);

  if (!nameInput.value) {
    isValid = false;
    invalidateInput(nameInput);
  }

  if (!isEmail(emailInput.value)) {
    isValid = false;
    invalidateInput(emailInput);
  }
}

/**
 * 
 * Helper function for inputValidate to clean code
 */
function resetInput (element) {
  element.classList.remove('invalid');
  element.nextElementSibling.classList.add('hidden');
}

function invalidateInput (element) {
  element.nextElementSibling.classList.remove('hidden')
  element.classList.add('invalid')
}
// Event listener to remove red error prompt from border if input
inputs.forEach(input => {
  input.addEventListener('input', () => {
    inputValidate();
  });
});



// Prevents form from submitting by default for validation control
form.addEventListener('submit', (e) => {
  e.preventDefault();
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


// let fields = {}

// document.addEventListener("DOMContentLoaded", function () {
//   fields.fName = document.getElementById('fname');
//   fields.lname = document.getElementById('lname');
//   fields.email = document.getElementById('email-field');
//   fields.message = document.getElementById('message');
//   fields.newsletter = document.getElementById('newsletter');
// })

// let form = document.getElementById('form');

// form.addEventListener('submit',(e) => {
//   let messages = []
//   if(fields.fname.value === '' || fields.fname.value == null) {
//     messages.push('First name is required')
//   }
//   if(fields.lname.value === '' || fields.lname.value == null) {
//     messages.push('Last name is required')
//   }
//   if(messages.length > 0) {
//     e.preventDefault()
//   }
// })

// /**
//  *  Function to check that form field is not empty
//  */
// function isNotEmpty(value) {
//   if (value == null || typeof value == 'undefined') return false;

//   return (value.length > 0);
// }

/**
 *  Function to check that the string is an email with regex epression
 */
function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return regex.test(String(email).toLowerCase());
}

// /**
//  * Function to check form condition and feedback any error with red highlight
//  */
// function formValidate(formField, validateFunction) {
//   if (formField == null) return false;

//   let isFormFieldValid = validateFunction(formField.value)
//   if (!isFormFieldValid) {
//     formField.className = 'placeholderRed';
//   } else {
//     formField.className = '';
//   }
//   return isFormFieldValid;
// }

// /**
//  *  Function to check the validity of the contact form combining validations
//  */
// function isValid() {
//   let valid = true;

//   valid &= formValidate(fields.fName, isNotEmpty);
//   valid &= formValidate(fields.lName, isNotEmpty);
//   valid &= formValidate(fields.email, isNotEmpty);
//   valid &= formValidate(fields.message, isNotEmpty);
//   return valid;
// }

// // User class constructor to combine values into same category
// class User {
//   constructor(fName, lName, email, newsletter, message) {
//     this.fName = fName;
//     this.lName = lName;
//     this.email = email;
//     this.newsletter = newsletter;
//     this.message = message;
//   }
// }


// /**
//  * Function to submit the contact form with validation. Error message to display if invalid.
//  */
// function submitForm() {
//   if (isValid()) {
//     let formUser = new User(fName.value, lName.value, email.value, newsletter.checked);
//     alert(`${formUser.fName} thanks for submitting your form!`)
//   } else {
//     alert("There was an error submitting your form. Please make sure all fields are entered.")
//   }
// }