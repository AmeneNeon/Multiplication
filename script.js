const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
// localStorage returns a string.in order to have it as a number we use JSON.parse()method.

let score = JSON.parse(localStorage.getItem("score"));
// if the score does not exist
if (!score) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
  // the value that we get here is a string to change it to number we use (+).
  const userAns = +inputEl.value;
  /*when we write let score= 0 ,so when we answer correctly score will be +1 and for wrong answer score will be -1.
Every time that we refresh the page the score will be zero again so we save score in the local storage of browser*/
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
function updateLocalStorage() {
  // we can not save the score directly to the local storage because score is a number ,so we have to convert score to  a string. We use JSON.stringify()method.
  localStorage.setItem("score", JSON.stringify(score));
}
