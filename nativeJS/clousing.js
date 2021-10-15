// что выведет в консоль?
// как это исправить

function makeCounter() {
  let count = 1;

  return function () {
    return count++;
  };
}

const counter = makeCounter();
const counter2 = makeCounter();

console.log("---", counter());
console.log("---", counter());
console.log("---", counter2());
console.log("---", counter2());
