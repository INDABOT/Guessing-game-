const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const err = document.querySelectorAll('.err');
const errorImg = document.querySelectorAll('.error-img');

console.log(firstName);
console.log(errorImg);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorImg[0].classList.remove('hide');
    err[0].innerText = "First Name cannot be empty";
  } else {
    firstName.classList.remove('error');
    errorImg[0].classList.add('hide');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    err.innerText = "Last Name cannot be empty";
    errorImg[1].classList.remove('hide');
  } else {
    lastName.classList.remove('error');
    errorImg[1].classList.add('hide');

  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    err.innerText = "Looks like this is not an email";
    errorImg[2].classList.remove('hide');
  } else {
    email.classList.remove('error');
    errorImg[2].classList.add('hide');

  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    err.innerText = "password cannot be empty";
    errorImg[3].classList.remove('hide');
  } else {
    password.classList.remove('error');
    errorImg[3].classList.add('hide');

  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
