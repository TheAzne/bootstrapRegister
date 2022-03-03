const fullName = document.getElementById("name");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
let passw = /[A-Z]/g;

form.addEventListener("submit", (e) => {
  let messages = [];

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

  var passwV = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwV.test(password.value)) {
    messages.push(
      "Password needs to be: 1 number, 1 lowercase, 1 uppercase, at least six characters"
    );
    password.focus();
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join("\n ");
  }
});
