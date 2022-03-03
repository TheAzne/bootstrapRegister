const fullName = document.getElementById("name");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
let passw = /[A-Z]/g;

form.addEventListener("submit", (e) => {
  let messages = [];
  e.preventDefault();
  if (fullName.value === "" || fullName.value == null) {
    messages.push("Full name is required");
  }

  if (fullName.value.length <= 3) {
    messages.push("Please write your full name");
    fullName.focus();
  }

  if (userName.value.length <= 3) {
    messages.push("Please write a better username");
    userName.focus();
  }

  var emailV =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailV.test(email.value)) {
    messages.push("Please write valid email");
    email.focus();
  }

  if (password.value.length <= 8) {
    messages.push("Password needs to at least 8 characters");
    password.focus();
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join("\n ");
  }
});
