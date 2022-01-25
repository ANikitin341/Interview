/*
    название: елочка изи букв
    
    описание: написать функцию, которая принимает число 
        возвращает елочку  высотой переданного числа

    теги: [строки]
    
    сложность: 15 мин
    
    уровень автора: 2
    
    тесты:
        f(1) //Aa
        f(2) //Aa\nAaBb
        f(3) //Aa\nAaBb\nAaBbCc

    решение:
        const f = (n) =>
        Array(n)
            .fill()
            .map((_, i) =>
            Array(i + 1)
                .fill()
                .map(
                (_, j) =>
                    String.fromCharCode(65 + j) + String.fromCharCode(65 + 32 + j)
                )
                .join("")
            )
            .join("\n");
*/
