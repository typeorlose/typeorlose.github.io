const editor = document.querySelector('.editor');
const wordCounter = document.querySelector('.word-counter');

const timeLimit = 5;

const state = {
  lastEdited: new Date(),
  timeLeft: timeLimit,
  wordCount: 0
};

function render() {
  editor.classList.add('color-transition');
  editor.setAttribute('data-seconds-left', Math.floor(state.timeLeft));

  wordCounter.textContent = 'Words: ' + state.wordCount;
}

function update() {
  const now = new Date();
  const sinceLastEdit = now.getTime() - state.lastEdited.getTime();
  const seconds = sinceLastEdit / 1000;
  state.timeLeft = Math.max(0, timeLimit - seconds);

  if (state.timeLeft === 0) {
    editor.innerHTML = '';
  }

  const text = editor.textContent;
  state.wordCount = text.split(/\s+/)
    .filter(function (word) { return word.trim().length > 0; })
    .length;
}

function onEdit(event) {
  state.lastEdited = new Date();
}

editor.focus();

setInterval(update, 100);
setInterval(render, 100);
editor.addEventListener('keypress', onEdit);
