// Resource used for guidance on form validation: https://www.codebrainer.com/blog/contact-form-in-javascript

let fields = {}

document.addEventListener("DOMContentLoaded", function () {
  fields.fName = document.getElementById('fname');
  fields.lname = document.getElementById('lname');
  fields.email = document.getElementById('email-field');
  fields.emailConfirm = document.getElementById('email-field-confirm');
  fields.message = document.getElementById('message');
  fields.newsletter = document.getElementById('newsletter');
})

/**
 *  Function to check that field is not empty
 */
function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;
  return (value.length > 0);
}

/**
 *  Function to check that the string is an email with regex epression
 */
function isEmail(email, emailConfirm) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email, emailConfirm).toLowerCase());
}

/**
 * Function to check form condition and feedback any error with red highlight
 */
function formValidate(formField, validateFunction) {
  if (formField == null) return false;

  let isFormFieldValid = validateFunction(formField.value)
  if (!isFormFieldValid) {
    formField.className = 'placeholderRed';
  } else {
    formField.className = '';
  }
  return isFormFieldValid;
}

/**
 *  Function to check the validity of the contact form combining validations
 */
function isValid() {
  let valid = true;

  valid &= formValidate(fields.fName, isNotEmpty);
  valid &= formValidate(fields.lName, isNotEmpty);
  valid &= formValidate(fields.email, isNotEmpty);
  valid &= formValidate(fields.emailConfirm, isNotEmpty);
  valid &= formValidate(fields.message, isNotEmpty);
  valid &= isEmailEqual();
  return valid;
}

/**
 * Function to check that the email addresses match and to highlight red if not
 */
function isEmailEqual() {
  if (formField.email.value == formField.emailConfirm.value) {
    formField.email.className = 'placeholderRed';
    formField.emailConfirm.className = 'placeholderRed';
    return true;
  }
  return false
}

// User class constructor to combine values into same category
class User {
  constructor(fName, lName, email, emailConfirm, newsletter, message) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.emailConfirm = emailConfirm;
    this.newsletter = newsletter;
    this.message = message;
  }
}

/**
 * Function to submit the contact form with validation. Error message to display if invalid.
 */
function submitForm() {
  if (isValid()) {
    let formUser = new User(fName.value, lName.value, email.value, emailConfirm.value, newsletter.checked);
    alert(`${formUser.fName} thanks for submitting your form!`)
  } else {
    alert("There was an error submitting your form. Please make sure all fields are entered correctly and emails match.")
  }
}