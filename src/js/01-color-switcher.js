function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let timerId = null;
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStart);

function onClickStart() {
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

refs.stopBtn.addEventListener('click', onClickStop);

function onClickStop() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
  clearInterval(timerId);
}
