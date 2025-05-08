import './style.scss';

// currrent Time

const hrElement = document.querySelector('#hr');
const minElement = document.querySelector('#min');
const secElement = document.querySelector('#sec');

// units 00:00:00

function formatTime(unit) {
  if (unit < 10) {
    return `0${unit}`;
  } else {
    return unit;
  }
}

function updateClock() {
  const now = new Date();
  //   console.log(now);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  //   console.log(hours, minutes, seconds);
  hrElement.innerHTML = formatTime(hours);
  minElement.innerHTML = formatTime(minutes);
  secElement.innerHTML = formatTime(seconds);
}

// update time / 1s
let clockInterval = setInterval(updateClock, 1000);

updateClock();

// current Date

const dateElement = document.querySelector('#date');
const dataElementName = document.querySelector('#dateName');

function updateDate() {
  const now = new Date();

  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayOffWeek = dayNames[now.getDay()];
  //   console.log(dayOffWeek);
  const day = now.getDate();
  //   console.log(day);
  const monthOffyear = monthNames[now.getMonth()];
  //   console.log(monthOffyear);
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  dateElement.innerHTML = `${day} || ${month} || ${year}`;
  dataElementName.innerHTML = `${dayOffWeek} || ${monthOffyear} || ${year}`;
}

updateDate();

// buttons

const buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    const btnId = event.target.id;

    if (btnId === 'timer-btn') {
      console.log('Timer ustawiony');
      timerMode();
    } else if (btnId === 'start-timer') {
      console.log('Timer włączony');
    } else if (btnId === 'stop-timer') {
      console.log('Timer wyłączony');
    } else if (btnId === 'reset-timer') {
      console.log('Timer zresetowany');
    } else if (btnId === 'dark-mode') {
      console.log('Dark mode');
    }
  });
});

// timer mode

function timerMode() {
  clearInterval(clockInterval);
  const hrElement = document.querySelector('#hr');
  const minElement = document.querySelector('#min');
  const secElement = document.querySelector('#sec');

  hrElement.innerHTML = '00';
  minElement.innerHTML = '20';
  secElement.innerHTML = '00';
}

// timer start

let coutdownInverval;

function runTimerCountdown() {
  let remainingTime = 20 * 60;

  clearInterval = coutdownInverval;

  coutdownInverval = setInterval(function () {});
}

// to be continue