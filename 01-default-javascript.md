**Table of Contents**
- [Data Type](#data-type)
- [Variable](#variable)
- [Javascript on the Browser](#javascript-on-the-browser)
  - [Document](#document)
  - [Event](#event)
  - [CSS in Javascript](#css-in-javascript)
  - [Save Username with Use localStorage](#save-username-with-use-localstorage)
- [Look around to javascript method](#look-around-to-javascript-method)
  - [How to make clock use Interval](#how-to-make-clock-use-interval)
  - [Random](#random)

# Data Type
- integer(정수, 123)
- float(실수, 1.23)
- string(문자열, "hi")
- boolean
- undefined
- null
- arrays
    ```javascript
    const fruit = ['apple', 'tomato']
    fruit.push('melon') // 원소 삽입
    console.log(a) // ["apple", "tomato", "melon"]

    const pop = fruit.pop() // 마지막 원소 삭제
    console.log(pop, fruit) // "melon", ["apple", "tomato"]

    fruit.splic(0, 1) // 0번째 인덱스 부터 1 만큼의 배열 삭제
    console.log(a) // ["tomato"]
    ```
- objects
    ```javascript
    const player = {
        name: 'kay',
        points: 10,
        fat: 0,
    }

    console.log(player) // {name: "kay", points: 10, fat: 0}
    console.log(player.name === player['name']) // true // .propertyName === ['propertyName']

    player.fat = false
    player.lastNmae = 'bing'
    console.log(player) // {name: "kay", points: 10, fat: false, lastNmae: "bing"} // 기존 변수 변경 및 추가 가능
    ```

# Variable
- **const** vs **let** vs **var**
    - const(상수) : 바뀔 수 없는 값(업데이트 불가) / default
    - let(변수) : 바뀔 수 있는 값 / 변경 가능성이 있을 경우에만 사용
    - var(변수) : legacy / const, let 사용 권장 / 어떠한 규칙도 없다.
    - let vs var
        ```javascript
        var name = 'kay'
        console.log(name) // kay
        
        var name = 'han'
        console.log(name) // han
        ```
        `var`의 경우 재선언 시에도 에러 없이 진행됨

        ```javascript
        let name = 'kay'
        console.log(name) // kay

        let name = 'han'
        console.log(name) // SyntaxError: Cannot declare a let variable twice: 'name'.
        ```
        `let`의 경우 재선언 시 이미 선언되었다는 에러 메시지 표시

        ```javascript
        console.log(foo) // undefined
        var foo

        consolg.log(bar) // Error: Uncaught ReferenceError: Cannot access uninitialized variable.
        let bar
        ```
        - 자바스크립트의 모든 선언에는 호이스팅이 일어나지만, let, const, class를 이용한 선언문의 경우 호이스팅이 발생하지 않는 것 처럼 동작한다.
        - `var`의 경우 에러 없이 진행
        - `let`의 경우 변수 선언 이전에 참조 시 참조에러 발생(스코프 시작에서 변수 선언까지 **일시적 사각지대**(Temporal Dead Zone; TDZ)에 빠지기 때문)
        - 호이스팅(Hoisting) ?
            - var, function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성
# Javascript on the Browser
## Document
```javascript
// javascript와 html이 별다른 연결 없이 document를 통해 연결되어 있다.
// html에서 다음과 같이 스크립트를 지정해줘야 한다.
// <script src="app.js"></script>
console.log(document, document.title)

const title = document.getElementById("title") // "title"이라는 id를 가진 element 가져오기
title.innerText = "Got you!" // title element의 text 값 변경

const hellos = document.getElementsByClassName("hello") // class 이름으로 element 검색
const h1 = document.getElementsByTagName("h1") // element tag로 검색

const selector = document.querySelector(".hello h1") // element를 css 방식으로 검색할 수 있다.(첫번째 element 반환)
const selectorAll = document.querySelectorAll(".hello h1") // element배열로 반환
// querySelector("#hello") === getElementById("hello")
// querySelectorAll(".hello") === getElementsByClassName("hello")

const bgImage = document.createElement("img"); // element 생성
document.body.appendChild(bgImage); // 생성한 element를 실제 화면에 표시해주기 위해 body에 추가
```
## Event
**"h1 html element mdn"** -> 구글 검색 후 Web API 페이지에서 javascript 문법 확인 가능
```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = 'blue'
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

h1.addEventListener("click", handleTitleClick); // h1.onclick = handleTitleClick; // on"eventName" property에 대입하여 사용할 수도 있음.
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);
```

```javascript
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; // javascript에서 직접적으로 html css를 설정할 수 있지만, 해당 방법은 권장하지 않음. css 설정은 css에서 하도록 구분.
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI")
}

function handleWindowOnline() {
    alert("ALL GOOOOOOD")
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```
- Window API도 활용할 수 있다.

```javascript
const link = document.querySelector("a");

// 모든 EventListener는 첫번째 파라미터에 이벤트에 관한 정보를 넣어준다.
function onLinkClick(event) {
    // event의 기본 동작이 실행되지 않도록 막는 것
    //click 후 원래라면 a 태그에 지정된 링크로 이동될텐데 해당 동작을 실행하지 않는다.
    event.preventDefault();
    console.log(event); // MouseEvent Class
}

link.addEventListener("click", onLinkClick);
```
## CSS in Javascript
```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color
    if (currentColor == 'blue') {
        h1.style.color = 'tomato'
    } else {
        h1.style.color = 'blue'
    }
}

h1.addEventListener("click", handleTitleClick); // h1.onclick = handleTitleClick;
```
- 위와 같이 코드를 작성해도 정상적으로 동작하나, 아래와 같이 처리하여 javascript / css 독립적으로 사용

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("active")
}

h1.addEventListener("click", handleTitleClick); // h1.onclick = handleTitleClick;
```
```css
h1 {
    color: blue;
}

.active {
    color: tomato;
}
```
- 정의해둔 css를 활용하여 element class 목록에 추가/삭제하여 원하는 스타일을 적용할 수 있다.
## Save Username with Use localStorage
```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    // localStorage에 userName: value 값 저장
    localStorage.setItem(USERNAME_KEY, userName);
    console.log("userName :", userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${userName}`;
}

// 기존 localStorage에 저장된 userName key value 가져오기 [default: null]
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}
```

# Look around to javascript method
## How to make clock use Interval
```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // pad 함수를 활용해 앞, 뒤로 원하는 길이만큼 빈공간을 채울 수 있다.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`; // ex) "01:23:45"
}

getClock(); // Interval의 경우 timeout 이후 실행되므로 최초 로드 시 값을 세팅해주기 위함
setInterval(getClock, 1000); // 1000ms===1s 마다 'getClock' 함수를 호출한다.
```

## Random
```javascript
console.log(Math.random()); // 해당 함수를 사용하여 난수를 생성할 수 있음. [0~0.999...]

console.log(Math.random() * 100); // 생성된 난수값에 *n을 하게되면 [0~(n-1.999...)] 범위의 난수 생성 가능 [0~99.999...]

console.log(Math.floor(Math.random() * 10)); // 실수 값을 반환하기 때문에 정수형태로 사용을 원할 경우 Math.floor 함수를 활용하여 소수점 제거 가능
/*
** 참고
Math.ceil(1.1) === 2 -> 올림
Math.floor(1.5) === 1 -> 내림
Math.round(1.5) === 2 -> 반올림
Math.round(1.4) === 1 -> 반올림
*/
```