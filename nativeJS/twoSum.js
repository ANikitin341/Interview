/*
    
    название: найти сумму чисел таких же как и заданное
    
    описание:написать функцию которая принимает массив чисел и target
    и возвращает индексы чисел при сложении которых получится target 
    
    теги: [числа, функции]
    
    сложность: 10 мин
    
    уровень автора: 2
    
    тесты:
       
        console.log('---[1,2];', twoSum([3,2, 4], 6)) 
        console.log('---[3,5];', twoSum([1,2,3,4,5,6], 10)) 

    решение:
        const twoSum = function (nums, target) {
          for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
              if (nums[i] + nums[j] === target) {
                return [i, j];
              }
            }
          }
        };
*/
