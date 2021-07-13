// написать функцию которая на вход принимает массив в нем массив из 3 элементов (валюта, покупка//продажа,сумма)
// на выходе должны получить объект с ключом валютой а значение массив (сумма покупок, сумма продаж)

const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gbp", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 11000],
  ["usd", "sell", 25000],
];
const output = {
  usd: [10000, 30000],
  gbp: [9000, 0],
  eur: [0, 7000],
  uah: [11000, 0],
};

const getObjSumBuySell = (input) => {
  return input.reduce((sum, value) => {
    const buy = sum?.[value[0]]?.[0] || 0;
    const sell = sum?.[value[0]]?.[1] || 0;

    return {
      ...sum,
      [value[0]]: [
        value[1] === "buy" ? buy + value[2] : buy,
        value[1] === "sell" ? sell + value[2] : sell,
      ],
    };
  }, {});
};

console.log("---", getObjSumBuySell(input));

const f = (arr) => {
  return arr.reduce((s, e) => {
    const obj = { ...s };
    if (e[1] === "buy") {
      obj[e[0]] = s[e[0]] ? [obj[e[0]][0] + e[2], obj[e[0]][1]] : [e[2], 0];
    } else {
      obj[e[0]] = s[e[0]] ? [obj[e[0]][0], obj[e[0]][1] + e[2]] : [0, e[2]];
    }
    return obj;
  }, {});
};

console.log("f", f(input));
