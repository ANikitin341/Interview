/*
    название: прототипирование
    
    описание: что выведет консоль
    
    теги: [массивы, функции]
    
    сложность: 3 мин
    
    уровень автора: 2
    
    тесты:
        Array.prototype.toString = function () {
          return this.map((e) => e + 1).join("");
        };

        const a = [1, 2, 3];
        const b = [6, 7, 8];

        const res = a.toString() + b;

        console.log("---res", res);

    решение:
        ---res 2348910
*/
