const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

const showGreeting = (username) => {
  const clock = document.querySelector("#clock");
  const weather = document.querySelector("#weather");
  const todo = document.querySelector("#todo-list");
  const todoForm = document.querySelector("#todo-form");
  const quotes = document.querySelector("#quote");

  const hour = new Date().getHours();
  let greetingText;
  switch (true) {
    case hour >= 5 && hour < 12:
      greetingText = "Good Morning";
      break;
    case hour >= 12 && hour < 18:
      greetingText = "Good Afternoon";
      break;
    case hour >= 18 && hour < 22:
      greetingText = "Good Evening";
      break;
    case hour >= 22 || hour < 5:
      greetingText = "Good Night";
      break;
  }

  greeting.innerText = `${greetingText}, ${username}`;
  greeting.classList.remove(HIDDEN);
  clock.classList.remove(HIDDEN);
  weather.classList.remove(HIDDEN);
  todo.classList.remove(HIDDEN);
  todoForm.classList.remove(HIDDEN);
  quotes.classList.remove(HIDDEN);
};

const loginEvent = (event) => {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN);

  showGreeting(username);

  localStorage.setItem(USERNAME_KEY, username);
};

const savedusername = localStorage.getItem(USERNAME_KEY);

if (!savedusername) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginEvent);
} else {
  showGreeting(savedusername);
}
