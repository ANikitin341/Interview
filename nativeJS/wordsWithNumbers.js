// написать функцию которая на вход принимает число и массив слов
// необходимо вернуть массив слов которые мы сможем написать используя клавиатуру кнопочного тлф
// цифры можем писать в любом порядке

const number = 3662277;
const words = ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"];
const output = ["foo", "bar", "foobar", "emo", "cap", "car"];

const number1 = 234;
const words1 = ["adg", "abc", "adgj"];
const output1 = ["adg"];

const numberToSymbol = {
  0: [],
  1: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

//решение
const checkWords = (number, words) =>
  words.filter((word) => {
    let num = [...`${number}`].map((e) => numberToSymbol[e]);
    return [...word].every((symbol) => {
      const indexNum = num.findIndex((arrNum) => arrNum.includes(symbol));
      if (indexNum + 1) {
        num.splice(indexNum, 1);
        return true;
      }
      return false;
    });
  });

// тесты
const res = checkWords(number, words);
const res1 = checkWords(number1, words1);
console.log("---res", res);
console.log("---res1", res1);
