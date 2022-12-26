const refs = {
  form: document.querySelector('.form'),
  amount: document.querySelector("[name='amount']"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
};

refs.form.addEventListener('submit', doPromises);

function doPromises(e) {
  e.preventDefault();

  const amount = refs.amount.valueAsNumber;
  const step = refs.step.valueAsNumber;
  let delay = refs.delay.valueAsNumber;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
