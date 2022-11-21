const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const todoForm2 = document.querySelector("#todo-form");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.hidden = true;
    const userName = loginInput.value;
    // localStorage에 userName: value 값 저장
    localStorage.setItem(USERNAME_KEY, userName);
    console.log("userName :", userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    todoForm2.hidden = false;
    greeting.innerText = `Hello ${userName}`;
}

// localStorage에 저장된 userName key의 value 값 가져오기 default: null
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.hidden = false;
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}
