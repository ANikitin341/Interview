const input = [-1, 0, 1, 2, -1, -4];
const quantity = 3;
const sum = 0;
const output = [
  [-1, -1, 2],
  [-1, 0, 1],
];

const fn = (arr, sum, quantity) => {
  const c = arr.reduce(
    (subsets, value) => [...subsets, ...subsets.map((set) => [value, ...set])],
    [[]]
  );

  const b = c.filter((el) =>
    el.length === quantity && el.reduce((s, n) => s + n) === sum ? true : false
  );

  return [...new Set(b.map((el) => JSON.stringify(el.sort())))].map((el) =>
    JSON.parse(el)
  );
};
console.log("---fn()", fn(input, sum, quantity));
