const time = document.querySelector('.time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const timeMeditated = document.querySelector('.timeMeditated');
const meditatedTime = document.querySelector('.meditatedTime');

const firstBell = document.querySelector('.firstBell');
const secondBell = document.querySelector('.secondBell');
const thirdBell = document.querySelector('.thirdBell');

const toneAudio = new Audio();

action = (act) => {
  time.textContent = `${act}: ${count}`;
};

let count = 1;
let cycles = 0;
let secs = 0;

function secondsToHms() {
  secs = cycles * 12;
  secs = Number(secs);
  let h = Math.floor(secs / 3600);
  let m = Math.floor((secs % 3600) / 60);
  let s = Math.floor((secs % 3600) % 60);

  let hDisplay = h > 0 ? h + (h == 1 ? ' hr ' : ' hrs ') : '';
  let mDisplay = m > 0 ? m + (m == 1 ? ' min ' : ' mins ') : '';
  let sDisplay = s > 0 ? s + (s == 1 ? ' sec' : ' secs') : '';

  meditatedTime.textContent = `Time: ${hDisplay} ${mDisplay} ${sDisplay}`;
}

start = () => {
  if (count === 1 || count === 13) {
    firstBell.muted = false;
    firstBell.play();
  }

  if (count === 5) {
    secondBell.muted = false;
    secondBell.play();
  }

  if (count === 9) {
    thirdBell.muted = false;
    thirdBell.play();
  }

  if (count < 5) {
    action('Inhale');
  }

  if (count >= 5 && count <= 8) {
    action('Hold');
  }

  if (count >= 9 && count <= 12) {
    action('Exhale');
  }

  if (count === 13) {
    count = 1;
    action('Inhale');
    cycles++;
    secondsToHms();
  }

  timeMeditated.textContent = `Cycles: ${cycles}`;

  count++;
};

const startBreathing = () => {
  setInterval(start, 1000);
};

startButton.addEventListener('click', startBreathing);

stopButton.addEventListener('click', () => {
  location.reload();
});
