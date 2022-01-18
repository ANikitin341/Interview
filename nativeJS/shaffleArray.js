/*
    название: пермешать массивов
    
    описание: 
        написать функцию которая приннимает массив
        возвращает массив где элемеенты расположенны в лучайном порядке

    теги: [функции, массив]
    
    сложность: 5 мин
    
    уровень автора: 2

    тесты:
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        
    
    решение:
        const getRandomArray = (arr) => {
          const newArr = [...arr];
          for (let index = newArr.length - 1; index >= 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            const current = newArr[index];
            newArr[index] = newArr[randomIndex];
            newArr[randomIndex] = current;
          }
          return newArr;
        };

        const getRandomArray = (arr) => arr.sort(() => Math.random() - 0.5);

*/
