import React from 'react';
import './App.css';
import Expenses from "./expenses";

const PLACES = ["ATM", "McDonald's", "Macy's", "Gas", "Chick-Fil-A", "Safeway", "iTunes", "Pizza", "BART"];
const TEST_SIZE = 200;
const MIN_VALUE = 1;
const INTERVAL_SIZE = 0.25;
const MAX_VALUE = 20;

//Really hacky method to generate a consistent random number, given a seed and a max value, based on arbitrary digits in the decimal of sin of an irrational number
function seededRandom(seed, max) {
  let rnd = Math.abs(Math.sin(seed * Math.E + Math.SQRT2));
  rnd *= 10000;
  return Math.floor(rnd) % max;
}

//generate some amount of random expenses
function randomExpenses(amount) {
  const expenses = [];
  for (let i = 0; i < amount; i++) {
    const place = PLACES[seededRandom(i, PLACES.length)];
    const amount = seededRandom(i, (MAX_VALUE - MIN_VALUE) / INTERVAL_SIZE + 1) * INTERVAL_SIZE + MIN_VALUE;
    expenses.push(`${place}:${amount}`);
  }
  return expenses.join(" ");
}
function App() {
  const expenses = randomExpenses(TEST_SIZE);
  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
