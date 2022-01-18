/*
    название: удаление островов
    
    описание: 
        необходимо написать функцию которая принимает двумерный массив
        где 1 суша 0 вода
        вокруг этого массива везде суша
        функция должна вернуть двумерный массив который оставит полуострава (которые соприкасаюсь с внешней сушей)
        и удалит все острова
        соединение может быть только вверх вниз вправо влево на одну клетку
        
    теги: [массивы, функции]
    
    сложность: 45 мин
    
    уровень автора: 2
    
    тесты:
        const input1 = [
          [1, 1],
          [0, 0],
        ];

        const output1 = [
          [1, 1],
          [0, 0],
        ];

        const input2 = [
          [1, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0],
          [0, 0, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0],
        ];

        const output2 = [
          [1, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0],
        ];

        const input3 = [
          [1, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0],
          [0, 0, 1, 0, 1, 0],
          [1, 0, 0, 0, 0, 0],
          [1, 0, 1, 1, 1, 0],
          [1, 0, 0, 0, 0, 0],
        ];

        const output3 = [
          [1, 0, 0, 0, 0, 0],
          [1, 1, 1, 0, 1, 1],
          [0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0],
        ]; 

        const res1 = f(input1);
        const res2 = f(input2);
        const res3 = f(input3);

        console.table(res1);
        console.table(res2);
        console.table(res3);

    решение:
        const f = (arr) => {
          const array = new Array(arr.length)
            .fill(0)
            .map(() => new Array(arr.length).fill(0));
          let counter = 1;
          let x = 0;
          let y = 0;
          let way = 0;

          const checkAndSet = (x, y) => {
            if (arr?.[y + 1]?.[x] && !array?.[y + 1]?.[x]) {
              array[y + 1][x] = 1;
              checkAndSet(x, y + 1);
            }
            if (arr?.[y - 1]?.[x] && !array?.[y - 1]?.[x]) {
              array[y - 1][x] = 1;
              checkAndSet(x, y - 1);
            }
            if (arr?.[y]?.[x + 1] && !array?.[y]?.[x + 1]) {
              array[y][x + 1] = 1;
              checkAndSet(x + 1, y);
            }
            if (arr?.[y]?.[x - 1] && !array?.[y]?.[x - 1]) {
              array[y][x - 1] = 1;
              checkAndSet(x, y - 1);
            }
            return;
          };

          while (counter < (arr.length + arr[0].length) * 2) {
            counter++;
            if (arr[y][x]) {
              array[y][x] = arr[y][x];
              checkAndSet(x, y);
            }

            switch (way) {
              case 0:
                if (arr?.[y + 1]?.[x] === undefined) {
                  way++;
                } else {
                  y++;
                }
                break;
              case 1:
                if (arr?.[y]?.[x + 1] === undefined) {
                  way++;
                } else {
                  x++;
                }
                break;
              case 2:
                if (arr?.[y - 1]?.[x] === undefined) {
                  way++;
                } else {
                  y--;
                }
                break;
              case 3:
                if (arr?.[y]?.[x - 1] === undefined) {
                  way++;
                } else {
                  x--;
                }
                break;
              default:
                break;
            }
          }
          return array;
        };
*/
