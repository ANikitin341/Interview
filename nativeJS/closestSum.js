/*
    название: число максимально приближенное к заданному
    
    описание: вы компания которая хочет сделать рекламу. 
        Есть несколько блогеров которые могут вам помочь за определенную плату (плата может быть и отрицательной)
        У вас есть сумма которую выделили на это
        Ваша задача написать функцию которая принимает колличество блогеров, массив с ценами блогеров, сумма которую выделили
        функция должна вернуть сумму максимально близку к сумме которую выделили
        

    теги: [числа, массивы, функции, рекурсия]
    
    сложность: 45 мин
    
    уровень автора: 2
    
    тесты:
        const nums1 = [-1, 2, 1, -4];
        const blogers = 3;
        const target1 = 1;
        const res = 2;
        console.log("closestSum", closestSum(blogers, nums1, target1))  //2    

    решение:
      function closestSum(blogers, nums, target) {
        const combinations = (arr, n) => {
          return arr.reduce(
            (p, c, i, a) =>
              p.concat(
                n > 1
                  ? combinations(a.slice(i + 1), n - 1).map((e) => [].concat(e, c))
                  : [[c]]
              ),
            []
          );
        };

        const resCombinations = combinations(nums, blogers);
        const { res } = resCombinations.reduce(
          ({ res, difference }, arr) => {
            const sum = arr.reduce((s, e) => s + e, 0);
            if (Math.abs(sum - target) < difference) {
              return { res: sum, difference: Math.abs(sum - target) };
            }
            return { res, difference };
          },
          { res: 0, difference: Infinity }
        );
        return res;
      }
*/
