const message = document.querySelector(".message");
const btn = document.querySelector(".shake-button");
const ball = document.querySelector(".ball");
const question = document.querySelector(".question");
const messages = [
  "Yes, definitely!",
  "No, not today.",
  "Ask again later.",
  "Cannot predict now.",
  "It is certain.",
  "Don't count on it.",
  "Very doubtful.",
  "Signs point to yes.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "Better not tell you now."
];

btn.disabled = true;

function randomMessage() {
  if (question.value.trim() === "") return;

  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];

  const changeFontSize = 30;
  message.style.fontSize = changeFontSize + 'px';
  question.value = '';

  ball.classList.add('shake');
  setTimeout(() => {
    ball.classList.remove('shake');
  }, 500);
}

btn.addEventListener('click', randomMessage);
ball.addEventListener('click', randomMessage);
question.addEventListener('input', () => {
  btn.disabled = question.value.trim() === "";
});
