/*
    название: максимальная продажа акций
    
    описание:написать функцию которая приинимает массив чисел,
        каждый индекс это день а число это стоимость акции
        необходимо найти максмальную прибыль 
        
    
    теги: [числа, массивы]
    
    сложность: 15 мин
    
    уровень автора: 2
    
    тесты:
        maxProfit([7, 1, 5, 3, 6, 4]) //5
        maxProfit([1, 2, 3, 4, 5, 6, 7]) //6
        maxProfit([999, 888, 4546, 1222, 6888, 3457, 24]) //6000
        maxProfit([7, 6, 5, 1]) //0

    решение:
        const maxProfit = (arr) => {
            const { profit } = arr.reduce(
                (sum, el) => {
                const { profit, min } = sum;
                if (el < min) {
                    sum.min = el;
                }
                if (el - min > profit) {
                    sum.profit = el - min;
                }
                return sum;
                },
                { min: 9999999, profit: 0 }
            );

            return profit;
        };
*/
