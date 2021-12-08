// что выведе консоль

Array.prototype.toString = function () {
  return this.map((e) => e + 1).join("");
};

const a = [1, 2, 3];
const b = [7, 8, 9];

const res = a.toString() + b;

console.log("---res", res);
