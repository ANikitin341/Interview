/*
    название: замыкание
    
    описание: 
      что выведет в консоль?
        
    теги: [замыкание, функции]
    
    сложность: 5 мин
    
    уровень автора: 2
    
    тесты:
      function makeCounter() {
    
        let count = 1;
        return function () {
          return count++;
        };
      }

      const counter = makeCounter();
      const counter2 = makeCounter();

      console.log("1---", counter());
      console.log("2---", counter());
      console.log("3---", counter2());
      console.log("4---", counter2());

    решение:
      1--- 1
      2--- 2
      3--- 1
      4--- 2
        
*/
