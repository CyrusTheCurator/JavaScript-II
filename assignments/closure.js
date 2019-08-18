// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closure() {
  let hidden = "This is an example of a closure";
  function displayHidden() {
    console.log(hidden);
  }
  return displayHidden();
}
closure();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let countTicker = 0;
  return function increment() {
    countTicker += 1;
    return countTicker;
  };
};

let newCounter = counter();

newCounter;
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let countTicker = 0;

  let methodObject = {
    increment: function increment() {
      countTicker += 1;
      return countTicker;
    },
    decrement: function decrement() {
      countTicker -= 1;
      return countTicker;
    }
  };

  return methodObject;
};

let newCounter2 = counterFactory();
let newCounter3 = counterFactory();

newCounter;
console.log(` Incrementing. NewCounter2 is now ${newCounter2.increment()}`);
console.log(` Incrementing. NewCounter2 is now ${newCounter2.increment()}`);
console.log(` Incrementing. NewCounter2 is now ${newCounter2.increment()}`);
console.log(` Incrementing. NewCounter2 is now ${newCounter2.increment()}`);

console.log(` Decrementing. NewCounter2 is now ${newCounter2.decrement()}`);
console.log(` Decrementing. NewCounter2 is now ${newCounter2.decrement()}`);
console.log(` Decrementing. NewCounter2 is now ${newCounter2.decrement()}`);
console.log(` Decrementing. NewCounter2 is now ${newCounter2.decrement()}`);

console.log(` Incrementing. NewCounter3 is now ${newCounter3.increment()}`);
console.log(` Incrementing. NewCounter3 is now ${newCounter3.increment()}`);
console.log(` Incrementing. NewCounter3 is now ${newCounter3.increment()}`);
console.log(` Incrementing. NewCounter3 is now ${newCounter3.increment()}`);

console.log(` Decrementing. NewCounter3 is now ${newCounter3.decrement()}`);
console.log(` Decrementing. NewCounter3 is now ${newCounter3.decrement()}`);
console.log(` Decrementing. NewCounter3 is now ${newCounter3.decrement()}`);
console.log(` Decrementing. NewCounter3 is now ${newCounter3.decrement()}`);
