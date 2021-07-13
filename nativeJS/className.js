// написать функцию которая принимает массив строк
// и сортирует его по колличеству одинаковых элементов (какая строка чаще встречается будет выше)
// например arr вернет ["header", "item", "b" , "menu-item", "icon" ]

const arr = [
  "item",
  "item",
  "item",
  "b",
  "b",
  "header",
  "header",
  "header",
  "menu-item",
  "icon",
  "header",
];

const array = [1, 2, 3, 4, 5];
const res = array.reduce(
  (akk, el) => {
    akk.b = 3;
    return {  curent: akk.curent + el, ...akk};
  },
  { curent: 0, b: 3 }
);

console.log("---res", res);
