const time = document.querySelector('.time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const timeMeditated = document.querySelector('.timeMeditated');
const darkmode = document.querySelector('.darkmode');
const body = document.querySelector('body');

darkmode.addEventListener('click', () => {
  body.classList.toggle('blackBackground');
});

action = (act) => {
  time.textContent = `${act}: ${count}`;
};

let count = 1;
let cycles = 0;

start = () => {
  if (count < 5) {
    action('Inhale');

    if (count === 1) {
      // audio.play();
    }
  }

  if (count >= 5 && count <= 8) {
    action('Hold');

    if (count === 5) {
      // audio.play();
    }
  }

  if (count >= 9 && count <= 12) {
    action('Exhale');

    if (count === 9) {
      // audio.play();
    }
  }

  if (count === 13) {
    count = 1;
    action('Inhale');
    cycles++;
  }

  timeMeditated.textContent = `Cycles Completed: ${cycles}`;

  count++;
};

const startBreathing = () => {
  setInterval(start, 1000);
};

startButton.addEventListener('click', startBreathing);

stopButton.addEventListener('click', () => {
  location.reload();
});
