/*
    название: сортировка по колличеству элементов
    
    описание:
      написать функцию которая принимает массив строк
      и сортирует его по колличеству одинаковых элементов (какая строка чаще встречается будет выше)
      например arr вернет ["header", "item", "b" , "menu-item", "icon" ]

    теги: [массивы]
    
    сложность: 4 мин
    
    уровень автора: 2
    
    тесты:
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

      fn(arr) //[ 'header', 'item', 'b', 'menu-item', 'icon' ]
        

    решение:
      const fn = (arr) => {
        const obj = arr.reduce((s, el) => {
          s[el] = (s[el] || 1) + 1;
          return s;
        }, {});
        return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .map((el) => el[0]);
      };
*/
