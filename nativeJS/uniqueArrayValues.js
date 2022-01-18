/*
    название: массив уникальных значений
    
    описание: написать функцию оторая принимает массив и возвращаем массив уникальных значений с разнами типами данных 
    
    теги: [числа, функции]
    
    сложность: 10 мин
    
    уровень автора: 2
    
    тесты:
        const arr = [
        2,
        2,
        2,
        3,
        4,
        2,
        2,
        {},
        {},
        [1],
        [1],
        [2],
        "1",
        "1",
        true,
        true,
        () => {
            console.log("---1", 1);
        },
        () => {
            console.log("---1", 1);
        },
        ];

        const res = [
        2,
        3,
        4,
        {},
        [1],
        [2],
        "1",
        true,
        () => {
            console.log("---1", 1);
        },
        ]; 

    решение:
        const uniqFunction = (arr) =>
            arr.reduce(
                (result, el) =>
                result.some((item) =>
                    (typeof el === "object" && typeof item === "object") ||
                    (typeof el === "function" && typeof item === "function")
                    ? JSON.stringify(el) === JSON.stringify(item)
                    : el === item
                )
                    ? result
                    : [...result, el],
                []
            );
*/
