/*
    
    название: проверка числа на вхождение в последовательность фибоначи
    
    описание:написать функцию которая приинимает число 
        возвращает true если число входит в последовательность фибоначи
        - false если не входит 
        последовательность фибоначи выглядит так: (1,1,2,3,5,8,13...)
    
    теги: [числа]
    
    сложность: 7 мин
    
    уровень автора: 2
    
    тесты:
        checkNumInFibonachi(1) //true
        checkNumInFibonachi(2) //true
        checkNumInFibonachi(3) //true
        checkNumInFibonachi(4) //false
        checkNumInFibonachi(5) //true
        checkNumInFibonachi(6) //false
        checkNumInFibonachi(7) //false
        checkNumInFibonachi(1597) //true
        checkNumInFibonachi(1500) //false

        const checkNumInFibonachi = (n) => {
        let a = 1;
        let b = 1;

        while (n > b) {
            [a, b] = [b, a + b];
        }

        return n === b;
        };
*/
