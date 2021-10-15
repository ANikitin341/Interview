/*
    название: раздача премии
    
    описание: у компании есть сотрудики в день зарплаты им раздают премию после
      остается какое-то колличество которое не раздали 
      вам нужно равномерно раздать сумму
      и вывести колличество сотрудников и бонусы тех у кого бонусы меньше максимального
      написать функцию которая приинимает в себя массив премий сотрудников и сумму
      возвращает всех сотрудников у которох премя меньше максимального
      раздавать вы должны следующем образом 
      сотруднику с минимальным колличесвом давать 3 доллара
      если остается 1 или 2 их так же следует отдать сотруднику с минннимамльным колличеством
      
    теги: [числа, массивы, функции]
    
    сложность: 20 мин
    
    уровень автора: 2
    
    тесты:
      const cash2 = [1,22,32,12];
      const s2 = 100;
      console.log("[ 41, 41, 42 ]", getResult(cash2, s2)); // [ 41, 41, 42 ]

      const cash1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      const s1 = 100;
      console.log("[14, 15, 14, 15, 14, 15, 14, 14, 15, 13, 14, 15]", getResult(cash1, s1)); // [14, 15, 14, 15, 14, 15, 14, 14, 15, 13, 14, 15]

      const cash3 = [1, 4, 7];
      const s3 = 9;
      console.log("[]", getResult(cash3, s3)); //[]

    решение:
      function getResult(cash, s) {
        const resArray = [...cash];
        while (s > 0) {
          const { index } = resArray.reduce(
            ({ min, index }, el, i) => ({
              min: el - min < 0 ? el : min,
              index: el - min < 0 ? i : index,
            }),
            { min: 99999, index: -1 }
          );
          let sMinus = 0;
          if (s - 3 >= 0) {
            sMinus = 3;
          } else if (s - 2 >= 0) {
            sMinus = 2;
          } else {
            sMinus = 1;
          }
          s = s - sMinus;
          resArray[index] = resArray[index] + sMinus;
        }
        const max = Math.max(...resArray);
        return resArray.filter((el) => el < max);
      }

    решение:
        const cashFunc = (premious, cash) => {
          if (!cash) {
            const maxPrem = Math.max(...premious);
            return premious.filter((item) => item < maxPrem);
          }
          const minPrem = Math.min(...premious);

          const indexMinPrem = premious.findIndex((item) => item === minPrem)
          premious[indexMinPrem] += cash > 2 ? 3 : cash;
          cash = cash > 2 ? cash - 3 : 0;
          return cashFunc(premious, cash);
        };
*/
