// Написать в каком порядке выведутся логи в консоль

console.log("---1");

setTimeout(() => {
  console.log("---2");
}, 0);

setTimeout(() => {
  console.log("---3");
});

const prom = new Promise((resolve, reject) => {
  console.log("---4");

  resolve("foo");
});

prom
  .then((value) => {
    console.log("---5");
  })
  .then(() => {
    console.log("---6");
  });

console.log("---7");

// 1 7 2 3  4 5 6 