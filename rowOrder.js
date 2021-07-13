// Даны два массива строк a1и a2возвращен отсортированный массив  лексикографическом порядке,
//строки a1 которого являются подстроками строк a2.

// Пример 1:
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// возвращается ["arp", "live", "strong"]

// Пример 2:
// a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// возвращается []

// Заметки:
// Осторожно: массив должен быть без дубликатов.

//https://learn.javascript.ru/regexp-methods

const a1 = ["arp", "live", "strong", "key"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

const a3 = ["tarp", "mice", "bull"];
const a4 = ["lively", "alive", "harp", "sharp", "armstrong"];
const substring = (a1, a2) => {
  const resArr = a1.filter((s1) => a2.some((s2) => s2.indexOf(s1) + 1));
  return [...new Set([...resArr])];
};

const res = substring(a1, a2);
const res1 = substring(a3, a4);
console.log("---res1", res1);
