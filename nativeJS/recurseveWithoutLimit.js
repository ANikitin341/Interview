/*
    название: переполнение стэка
    
    описание: 
        написать рекурсивную функцию которая принимает в  себя число и складыват все числа от него до нуля
        основная проблема в том что этто эта функция должна уметьт складывать любые числа (даже больше 100000)
        и не падать в ошибку

    теги: [функции, рекеурсия]
    
    сложность: 60 мин
    
    уровень автора: 2

    подсказка: 
      обычная рекурсия
      const recurseve = (count) => {
        if (count === 0) {
          return count;
        }
        return recurseve(count - 1) + count;
      };

      console.log("---recurseve", recurseve(10));
    
    тесты:
        recurseveWithoutLimitMemory(1000000)
    
    решение:
      async function recurseveWithoutLimitMemory   (count) {
        if (count == 0) {
          return count;
        }
        if (count % 1000 === 0) {
          console.log(count);
        }

        await new Promise( (r) =>r());

        return (await recurseveWithoutLimitMemory(count - 1)) + count;
      };
*/
