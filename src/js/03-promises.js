import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', onCSubmitPromise);

function onCSubmitPromise(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  console.log(delay, step, amount);

  for (let i = 0; i < amount.value; i += 1) {
    let position = i + 1;
    console.log(typeof step.value);
    const delays = Number(delay.value) + step.value * i;
    console.log(delays);

    createPromise(position, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  form.reset();
}
