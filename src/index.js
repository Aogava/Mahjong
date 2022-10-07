import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const createRandomPrimeNumber = (min, max) => {
  let isPrime = false, notPrime = false;
  let randomNumber = 0;

  while (isPrime !== true) {
    isPrime = false;
    notPrime = false;

    randomNumber = Math.floor(Math.random() * (max - min)) + min + 1; //Both min and max numbers exluded from range  

    if (randomNumber === 1) {
      continue;
    }
    else if (randomNumber > 1) {
      for (let i = 2; i < randomNumber; i++) {
        if (randomNumber % i === 0) {
          notPrime = true;
          break;
        }
      }

      if (notPrime === true) continue;

      isPrime = true;
    }
    else {
      continue;
    }
  }

  return randomNumber;
}

const initialCardsArray = [];

while (initialCardsArray.length < 16) { //You can increase amount of cards
  const number = createRandomPrimeNumber(1, 60); //But then you should increase number range

  if (!initialCardsArray.includes(number)) initialCardsArray.push(number);
}

const copiedCardsArray = [...initialCardsArray];
const finalCardsArray = [];

while (copiedCardsArray.length !== 0) {
  let randomIndex = Math.floor(Math.random() * (initialCardsArray.length - 1));
  finalCardsArray.push(initialCardsArray[randomIndex]);
  initialCardsArray.splice(randomIndex, 1);

  randomIndex = Math.floor(Math.random() * (copiedCardsArray.length - 1));
  finalCardsArray.push(copiedCardsArray[randomIndex]);
  copiedCardsArray.splice(randomIndex, 1);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App finalCardsArray={finalCardsArray} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
