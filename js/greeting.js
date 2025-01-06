const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const showGreeting = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
};

const loginEvent = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN);

  showGreeting(username);

  localStorage.setItem(USERNAME_KEY, username);
};

const savedusername = localStorage.getItem(USERNAME_KEY);

if (savedusername === null || savedusername === "") {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginEvent);
} else {
  showGreeting(savedusername);
}
