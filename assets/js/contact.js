// Resource used for guidance: https://www.codebrainer.com/blog/contact-form-in-javascript
let fields = {}

document.addEventListener("DOMContentLoaded", function () {
  fields.fName = document.getElementById('fname');
  fields.lname = document.getElementById('lname');
  fields.email = document.getElementById('email');
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
function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}