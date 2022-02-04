/*
    название: кастомная функция перебора массива
    
    описание:
        описать функцию, которая сможет осуществлять перебор массива и выполнять передаваемый коллбек с каждым из элементов,
        то есть функция будет принимать первым аргументом - массив, вторым - коллбек (коллбек может принимать елемент массива и индекс), например:
        iterateFunc([1, 2, 3], (el, index) => console.log(el, index))
        необходимо реализовать эту функцию при помощи базовых циклов (for/while) и с помощью рекурсии
    
    теги: [массивы, рекурсия]
    
    сложность: 15 мин
    
    уровень автора: 2
        
    решение:
        const baseCyclesFunc = (array, callback) => {
          for (let i = 0; i < array.length; i++) {
            callback(array[i], i);
          }
        }

        const recursiveFunc = (array, callback) => {
          let i = 0;
          const recursiveFunc = (index) => {
            if(index < array.length) {
              callback(array[index], index);
              recursiveFunc(index+1);
            }
          }

          recursiveFunc(i);
        }
*/
