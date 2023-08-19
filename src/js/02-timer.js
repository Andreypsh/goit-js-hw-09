import flatpickr from 'flatpickr';
const inputDate = document.querySelector('#datetime-picker');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elements = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  startBtn: document.querySelector('[data-start]'),
};

elements.startBtn.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] - currentDate > 0) {
      elements.startBtn.disabled = false;
    } else {
      elements.startBtn.disabled = true;
      Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
    }
  },
};

const flat = flatpickr(inputDate, options);
import 'flatpickr/dist/flatpickr.min.css';
console.log(flat);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

elements.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  const addData = flat.selectedDates[0];
  timerId = setInterval(() => {
    const startDate = new Date();
    const countTime = addData - startDate;
    elements.startBtn.disabled = true;

    if (countTime < 0) {
      clearInterval(timerId);
      return;
    }
    updateDate(convertMs(countTime));
  }, 1000);
}
function updateDate({ days, hours, minutes, seconds }) {
  elements.days.textContent = addLeadingZero(days);
  elements.hours.textContent = addLeadingZero(hours);
  elements.minutes.textContent = addLeadingZero(minutes);
  elements.seconds.textContent = addLeadingZero(seconds);
}
