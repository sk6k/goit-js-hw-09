const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', changeColor);

function changeColor() {
  refs.btnStop.disabled = false;

  const intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  refs.btnStop.addEventListener('click', stopChangeColor);

  function stopChangeColor() {
    refs.btnStop.disabled = true;
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const disableButton = () => {
  refs.btnStart.disabled = true;
};
refs.btnStart.addEventListener('click', disableButton);
