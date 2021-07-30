/*
    название: поиск квадрата в двумерном массиве
    
    описание: дан двумерный массив из 0 и 1
    [[1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]]
    необходимо написать функцию которая принимает этот массив
    и возвращет размер самого большого квадрата из едениц
    например 
    [
        [1,1,0,1],
        [0,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
    ]
    вернет 3
    верхний левый угол квадрата имемет координаты 1:1 
    и у него в длиину 3 елемента, а в ширину 3 елемента

    теги: [массивы, функции, рекурсия]
    
    сложность: 50 мин
    
    уровень автора: 2
    
    тесты:
        largestArea([
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ]); //2
        largestArea([
            [1, 1, 0, 1],
            [0, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ]); //3
        largestArea([
            [1, 1, 0, 1, 1],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
        ]); //3

    решение:
    function largestArea(samples) {
        const checkSquare = (i, j, size = 1) => {
            
            let quantity = size ** 2;
            for (let x = i; x < size + i; x++) {
                for (let y = j; y < size + j; y++) {
                    if (samples[x] && samples[x][y]) {
                    quantity--;
                    }
                }
            }
            
            if (!quantity) {
                return checkSquare(i, j, size + 1);
            } else {
                return size - 1;
            }
        };

        let squareFirst = 0;
        for (let x = 0; x < samples.length; x++) {
            for (let y = 0; y < samples.length; y++) {
                if (samples[x][y]) {
                    const res = checkSquare(x, y);

                    if (res > squareFirst) {
                        squareFirst = res;
                    }
            }
            }
        }
        
        return squareFirst;
    }
*/
