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
  

  if (userName.value.length <= 3) {
    messages.push("Please write a better username");
    userName.focus();
  }

  

  
  if (password.value.length <= 8) {
    messages.push(
      "Password needs to at least 8 characters"
    );
    password.focus();
  }

  if (messages.length > 0) {

    errorElement.innerText = messages.join("\n ");
  } 
  
});
